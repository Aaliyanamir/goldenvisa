const supportedLanguages = new Set(['ar', 'de', 'es', 'fr', 'ru', 'tr', 'zh-CN']);
const requestWindowMs = 60_000;
const requestLimit = 120;
const requestLog = new Map<string, { count: number; resetAt: number }>();

interface TranslateRequest {
  texts?: unknown;
  targetLanguage?: unknown;
}

interface GoogleTranslationResponse {
  data?: {
    translations?: Array<{ translatedText?: string }>;
  };
  error?: {
    message?: string;
  };
}

function isTextArray(value: unknown): value is string[] {
  return Array.isArray(value)
    && value.length > 0
    && value.length <= 40
    && value.every((text) => typeof text === 'string' && text.length > 0 && text.length <= 5_000)
    && value.reduce((total, text) => total + (typeof text === 'string' ? text.length : 0), 0) <= 50_000;
}

function isRateLimited(clientKey: string) {
  const now = Date.now();
  for (const [key, entry] of requestLog) {
    if (now >= entry.resetAt) requestLog.delete(key);
  }

  const current = requestLog.get(clientKey);
  if (!current || now >= current.resetAt) {
    requestLog.set(clientKey, { count: 1, resetAt: now + requestWindowMs });
    return false;
  }
  if (current.count >= requestLimit) return true;
  current.count += 1;
  return false;
}

function parseFreeTranslations(value: unknown, expectedCount: number): string[] | null {
  if (!Array.isArray(value) || !Array.isArray(value[0])) return null;
  const segments: unknown[] = value[0];
  if (segments.some((segment) => !Array.isArray(segment) || typeof segment[0] !== 'string')) return null;
  const translatedText = segments.map((segment) => (segment as unknown[])[0] as string).join('');
  const translations = translatedText.split('\n');
  return translations.length === expectedCount ? translations : null;
}

async function translateWithGoogle(texts: string[], targetLanguage: string, apiKey: string) {
  const response = await fetch(`https://translation.googleapis.com/language/translate/v2?key=${encodeURIComponent(apiKey)}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ q: texts, target: targetLanguage, format: 'text' }),
    cache: 'no-store',
    signal: AbortSignal.timeout(15_000),
  });
  const result = await response.json() as GoogleTranslationResponse;
  const translations = result.data?.translations;
  if (!response.ok || !translations || translations.length !== texts.length
    || translations.some(({ translatedText }) => typeof translatedText !== 'string')) {
    throw new Error('Google Cloud Translation returned an unsuccessful or incomplete result.');
  }
  return translations.flatMap(({ translatedText }) => (
    typeof translatedText === 'string' ? [translatedText] : []
  ));
}

async function translateWithPublicEndpoint(texts: string[], targetLanguage: string) {
  const params = new URLSearchParams({
    client: 'gtx',
    sl: 'auto',
    tl: targetLanguage,
    dt: 't',
    q: texts.join('\n'),
  });
  const response = await fetch('https://translate.googleapis.com/translate_a/single', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
    body: params,
    cache: 'no-store',
    signal: AbortSignal.timeout(15_000),
  });
  const result: unknown = await response.json();
  const translations = response.ok ? parseFreeTranslations(result, texts.length) : null;
  if (!translations) {
    throw new Error('The translation provider returned an unsuccessful or incomplete result.');
  }
  return translations;
}

export async function POST(request: Request) {
  const requestUrl = new URL(request.url);
  const originHeader = request.headers.get('origin');
  const requestHost = request.headers.get('x-forwarded-host') ?? request.headers.get('host') ?? requestUrl.host;
  const requestProtocol = (request.headers.get('x-forwarded-proto') ?? requestUrl.protocol.replace(':', '')).split(',')[0].trim();
  let origin: URL | null = null;
  try {
    if (originHeader) origin = new URL(originHeader);
  } catch {
    origin = null;
  }
  if (!origin || origin.host !== requestHost || origin.protocol !== `${requestProtocol}:`) {
    return Response.json({ error: 'Same-origin requests only.' }, { status: 403 });
  }

  const clientKey = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  if (isRateLimited(clientKey)) {
    return Response.json({ error: 'Translation request limit reached. Try again shortly.' }, { status: 429 });
  }

  let body: TranslateRequest;
  try {
    const rawBody = await request.text();
    if (rawBody.length > 250_000) {
      return Response.json({ error: 'Translation request is too large.' }, { status: 413 });
    }
    body = JSON.parse(rawBody) as TranslateRequest;
  } catch {
    return Response.json({ error: 'A valid JSON request is required.' }, { status: 400 });
  }

  if (!isTextArray(body.texts) || typeof body.targetLanguage !== 'string'
    || !supportedLanguages.has(body.targetLanguage)) {
    return Response.json({ error: 'Unsupported language or invalid translation text.' }, { status: 400 });
  }

  try {
    const apiKey = process.env.GOOGLE_TRANSLATE_API_KEY;
    const translations = apiKey
      ? await translateWithGoogle(body.texts, body.targetLanguage, apiKey)
      : await translateWithPublicEndpoint(body.texts, body.targetLanguage);
    return Response.json({ translations }, { headers: { 'Cache-Control': 'no-store' } });
  } catch (error) {
    console.error('Site translation request failed.', error);
    return Response.json({ error: 'Automatic translation is temporarily unavailable.' }, { status: 502 });
  }
}

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

function isFreeTranslationResponse(value: unknown): value is unknown[] {
  return Array.isArray(value) && Array.isArray(value[0]);
}

function getFreeTranslations(value: unknown, expectedCount: number): string[] | null {
  if (!isFreeTranslationResponse(value)) return null;

  const segments = value[0] as unknown[];
  if (segments.some((segment) => !Array.isArray(segment) || typeof segment[0] !== 'string')) return null;

  const translatedText = segments.map((segment) => (segment as unknown[])[0] as string).join('');
  const translations = translatedText.split('\n');
  return translations.length === expectedCount ? translations : null;
}

interface FreeTranslationText {
  text: string;
  prefix: string;
  suffix: string;
}

function splitForFreeTranslation(texts: string[]) {
  const batches: FreeTranslationText[][] = [];
  let batch: FreeTranslationText[] = [];
  let batchLength = 0;

  for (const source of texts) {
    const match = source.match(/^(\s*)([\s\S]*?)(\s*)$/);
    const text = match?.[2].replace(/\s+/g, ' ').trim() ?? source;
    const item = { text, prefix: match?.[1] ?? '', suffix: match?.[3] ?? '' };
    const textLength = text.length;
    if (textLength > 5_000) throw new Error('A translation text is too long for the free translation service.');
    if (batch.length && batchLength + textLength + 1 > 5_000) {
      batches.push(batch);
      batch = [];
      batchLength = 0;
    }
    batch.push(item);
    batchLength += textLength + 1;
  }

  if (batch.length) batches.push(batch);
  return batches;
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
  if (requestLog.size > 5_000) {
    for (const [key, entry] of requestLog) {
      if (now >= entry.resetAt) requestLog.delete(key);
    }
  }
  const rateLimitKey = requestLog.size >= 5_000 && !requestLog.has(clientKey)
    ? '__overflow__'
    : clientKey;
  const current = requestLog.get(rateLimitKey);

  if (!current || now >= current.resetAt) {
    requestLog.set(rateLimitKey, { count: 1, resetAt: now + requestWindowMs });
    return false;
  }
  if (current.count >= requestLimit) return true;

  current.count += 1;
  return false;
}

export async function POST(request: Request) {
  const requestUrl = new URL(request.url);
  if (request.headers.get('origin') !== requestUrl.origin) {
    return Response.json({ error: 'Same-origin requests only.' }, { status: 403 });
  }

  const apiKey = process.env.GOOGLE_TRANSLATE_API_KEY;
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

  if (!isTextArray(body.texts) || typeof body.targetLanguage !== 'string' || !supportedLanguages.has(body.targetLanguage)) {
    return Response.json({ error: 'Unsupported language or invalid translation text.' }, { status: 400 });
  }

  let translatedTexts: string[];
  if (apiKey) {
    let response: Response;
    try {
      response = await fetch(`https://translation.googleapis.com/language/translate/v2?key=${encodeURIComponent(apiKey)}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ q: body.texts, target: body.targetLanguage, format: 'text' }),
        cache: 'no-store',
      });
    } catch {
      console.error('Google Cloud Translation request failed to reach the provider.');
      return Response.json({ error: 'The translation provider could not be reached.' }, { status: 502 });
    }

    let result: GoogleTranslationResponse;
    try {
      result = await response.json() as GoogleTranslationResponse;
    } catch {
      console.error('Google Cloud Translation returned an unreadable response.');
      return Response.json({ error: 'The translation provider returned an invalid response.' }, { status: 502 });
    }

    const translations = result.data?.translations;
    if (!response.ok || !translations || translations.length !== body.texts.length
      || translations.some((translation) => typeof translation.translatedText !== 'string')) {
      console.error('Google Cloud Translation returned an unsuccessful or incomplete result.');
      return Response.json({ error: 'The translation provider could not translate this page content.' }, { status: 502 });
    }
    translatedTexts = translations.flatMap(({ translatedText }) => (
      typeof translatedText === 'string' ? [translatedText] : []
    ));
  } else {
    let batches: FreeTranslationText[][];
    try {
      batches = splitForFreeTranslation(body.texts);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Translation text is too long.';
      return Response.json({ error: message }, { status: 413 });
    }

    translatedTexts = [];
    for (const batch of batches) {
      const params = new URLSearchParams({
        client: 'gtx',
        sl: 'auto',
        tl: body.targetLanguage,
        dt: 't',
        q: batch.map(({ text }) => text).join('\n'),
      });
      let response: Response;
      try {
        response = await fetch('https://translate.googleapis.com/translate_a/single', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
          body: params,
          cache: 'no-store',
          signal: AbortSignal.timeout(15_000),
        });
      } catch {
        console.error('Free translation request failed to reach the provider.');
        return Response.json({ error: 'The free translation provider could not be reached.' }, { status: 502 });
      }

      let result: unknown;
      try {
        result = await response.json();
      } catch {
        console.error('Free translation provider returned an unreadable response.');
        return Response.json({ error: 'The translation provider returned an invalid response.' }, { status: 502 });
      }

      const translations = response.ok ? getFreeTranslations(result, batch.length) : null;
      if (!translations) {
        console.error('Free translation provider returned an unsuccessful or incomplete result.');
        return Response.json({ error: 'The translation provider could not translate all page content.' }, { status: 502 });
      }
      translatedTexts.push(...translations.map((translation, index) => (
        `${batch[index].prefix}${translation}${batch[index].suffix}`
      )));
    }
  }

  return Response.json({
    translations: translatedTexts,
  }, {
    headers: { 'Cache-Control': 'no-store' },
  });
}

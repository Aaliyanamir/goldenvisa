import { NextResponse, type NextRequest } from 'next/server';
import { isLocaleCode } from '@/lib/locales';

const localeCookieName = 'site-locale';

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  if (pathname.startsWith('/api/') || pathname.startsWith('/_next/') || /\.[^/]+$/.test(pathname)) {
    return NextResponse.next();
  }

  const rewrittenLocale = request.headers.get('x-site-locale');
  if (rewrittenLocale && isLocaleCode(rewrittenLocale)) {
    return NextResponse.next();
  }

  const segments = pathname.split('/');
  const requestedLocale = segments[1]?.toLowerCase();

  if (requestedLocale && isLocaleCode(requestedLocale)) {
    const localizedPath = `/${segments.slice(2).join('/')}`.replace(/\/$/, '') || '/';
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-site-locale', requestedLocale);
    requestHeaders.set('x-site-path', localizedPath);
    const rewrittenUrl = request.nextUrl.clone();
    rewrittenUrl.pathname = localizedPath;

    const response = NextResponse.rewrite(rewrittenUrl, { request: { headers: requestHeaders } });
    response.cookies.set(localeCookieName, requestedLocale, {
      httpOnly: true,
      sameSite: 'lax',
      secure: request.nextUrl.protocol === 'https:',
      path: '/',
      maxAge: 60 * 60 * 24 * 365,
    });
    return response;
  }

  const savedLocale = request.cookies.get(localeCookieName)?.value;
  const locale = savedLocale && isLocaleCode(savedLocale) ? savedLocale : 'en';
  const redirectUrl = request.nextUrl.clone();
  redirectUrl.pathname = `/${locale}${pathname === '/' ? '' : pathname}`;
  return NextResponse.redirect(redirectUrl, 308);
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|assets/).*)',
  ],
};

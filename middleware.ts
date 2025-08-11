// middleware.ts
import { auth } from '@/app/_lib/auth/edgeSafeAuth';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const session = await auth();

  const { pathname } = req.nextUrl;

  // Allow access to login and static files
  const isPublicPath = pathname === '/login' || pathname.startsWith('/_next') || pathname.startsWith('/favicon.ico') || pathname.startsWith('/api/auth/signIn');

  if (!session && !isPublicPath) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'], // Optional: extra safety
};
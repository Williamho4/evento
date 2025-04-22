import { NextRequest, NextResponse } from 'next/server'

function eventsMiddleware(request: NextRequest) {
  return NextResponse.redirect(new URL('/events/all', request.url))
}

function homeMiddleware(request: NextRequest) {
  return NextResponse.redirect(new URL('/', request.url))
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname === '/events') {
    return eventsMiddleware(request)
  }

  if (pathname === '/home') {
    return homeMiddleware(request)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/events', '/home'],
}

import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'
import type { Role } from '@/types/auth'

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token
    const pathname = req.nextUrl.pathname

    const role = token?.role as Role | undefined

    if (pathname.startsWith('/couple') && role !== 'COUPLE') {
      return NextResponse.redirect(new URL('/login', req.url))
    }

    if (pathname.startsWith('/vendor') && role !== 'VENDOR') {
      return NextResponse.redirect(new URL('/login', req.url))
    }

    if (pathname.startsWith('/admin') && role !== 'ADMIN') {
      return NextResponse.redirect(new URL('/login', req.url))
    }

    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
)

export const config = {
  matcher: ['/couple/:path*', '/vendor/:path*', '/admin/:path*'],
}
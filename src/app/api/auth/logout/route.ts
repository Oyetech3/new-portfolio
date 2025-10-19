import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const response = NextResponse.json(
    { message: 'Logged out successfully' },
    { status: 200 }
  )

  response.cookies.set('admin_token', '', {
    httpOnly: true,
    maxAge: 0,
  })

  return response
}
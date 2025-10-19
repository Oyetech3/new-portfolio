import { db } from '@/lib/db' 
import {  NextResponse } from 'next/server'

export async function GET() {
    try {
      const result = await db.postView.groupBy({
        by: ['ip_address'],
        _count: {
          ip_address: true,
        },
      })
  
      return NextResponse.json({ unique: result.length })
    } catch (error) {
      console.error('Unique visitors error:', error)
      return NextResponse.json({ error: 'Failed to fetch unique visitors' }, { status: 500 })
    }
  }
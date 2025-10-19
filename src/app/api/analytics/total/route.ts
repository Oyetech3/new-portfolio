import { db } from '@/lib/db' 
import {  NextResponse } from 'next/server'

export async function GET() {
    try {
      const result = await db.postView.aggregate({
        _count: {
          id: true,
        },
      })
  
      return NextResponse.json({ total: result._count.id })
    } catch (error) {
      console.error('Total views error:', error)
      return NextResponse.json({ error: 'Failed to fetch total views' }, { status: 500 })
    }
  }
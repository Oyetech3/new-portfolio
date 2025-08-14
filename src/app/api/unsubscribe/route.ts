import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { sendUnsubscribeConfirmation } from '@/lib/email';
import { unsubscribeSchema } from '@/lib/validation';
import type { ApiResponse } from '@/types';

export async function POST(request: NextRequest): Promise<NextResponse<ApiResponse>> {
  try {
    const body = await request.json();
    
    const validation = unsubscribeSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json({
        success: false,
        message: 'Invalid unsubscribe token.',
      }, { status: 400 });
    }

    const { token } = validation.data;

    const subscriber = await db.subscriber.findUnique({
      where: { unsubscribeToken: token },
    });

    if (!subscriber) {
      return NextResponse.json({
        success: false,
        message: 'Invalid unsubscribe token.',
      }, { status: 404 });
    }

    if (!subscriber.isActive) {
      return NextResponse.json({
        success: false,
        message: 'This email is already unsubscribed.',
      }, { status: 409 });
    }

    // Deactivate subscription
    await db.subscriber.update({
      where: { unsubscribeToken: token },
      data: { isActive: false },
    });

    // Send confirmation email
    await sendUnsubscribeConfirmation(subscriber.email);

    return NextResponse.json({
      success: true,
      message: 'Successfully unsubscribed from our newsletter.',
    });

  } catch (error) {
    console.error('Unsubscribe error:', error);
    return NextResponse.json({
      success: false,
      message: 'An error occurred while processing your request.',
    }, { status: 500 });
  }
}
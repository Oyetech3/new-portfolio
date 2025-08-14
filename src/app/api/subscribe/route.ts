import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { sendWelcomeEmail } from '@/lib/email';
import { subscriptionSchema } from '@/lib/validation';
import type { ApiResponse } from '@/types';

export async function POST(request: NextRequest): Promise<NextResponse<ApiResponse>> {
  try {
    const body = await request.json();
    
    // Validate input
    const validation = subscriptionSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json({
        success: false,
        message: validation.error.issues[0].message,
      }, { status: 400 });
    }

    const { email } = validation.data;

    // Check if already subscribed
    const existingSubscriber = await db.subscriber.findUnique({
      where: { email },
    });

    if (existingSubscriber) {
      if (existingSubscriber.isActive) {
        return NextResponse.json({
          success: false,
          message: 'This email is already subscribed to our newsletter.',
        }, { status: 409 });
      } else {
        // Reactivate subscription
        const updatedSubscriber = await db.subscriber.update({
          where: { email },
          data: { isActive: true },
        });
        
        await sendWelcomeEmail(email, updatedSubscriber.unsubscribeToken);
        
        return NextResponse.json({
          success: true,
          message: 'Welcome back! Your subscription has been reactivated.',
        });
      }
    }

    // Create new subscription
    const subscriber = await db.subscriber.create({
      data: { email },
    });

    // Send welcome email
    await sendWelcomeEmail(email, subscriber.unsubscribeToken);

    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed! Please check your email for confirmation.',
    });

  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json({
      success: false,
      message: 'An error occurred while processing your subscription.',
    }, { status: 500 });
  }
}
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const subscribers = await db.subscriber.findMany({
            select: {
                email: true,
                subscribedAt: true
            },
            orderBy: {
                id: 'desc'
            }
        })

        return NextResponse.json(subscribers)
    }
    catch {
        return NextResponse.json({
            error: "Error generating Subscribers"
        })
    }
}
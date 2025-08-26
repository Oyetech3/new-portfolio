


// app/api/logout/route.ts
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  const cookiesStore = await cookies()
  cookiesStore.delete("user");
  return NextResponse.json({ success: true });
}








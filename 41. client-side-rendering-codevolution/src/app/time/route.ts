import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  // the response is cached
  return NextResponse.json({ time: new Date().toLocaleTimeString() });
}

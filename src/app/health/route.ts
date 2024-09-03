import { NextResponse } from "next/server";

// eslint-disable-next-line @typescript-eslint/require-await -- no await needed
export async function GET() {
  return NextResponse.json({ status: "ok" });
}

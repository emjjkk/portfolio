import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    if (
      typeof email !== "string" ||
      !/^[\w\-.]+@([\w-]+\.)+[\w-]{2,}$/.test(email)
    ) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }
    // TODO: Save to database, send to newsletter service, etc.
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}

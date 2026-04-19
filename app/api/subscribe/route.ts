import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const scriptUrl = process.env.GOOGLE_SCRIPT_URL;
  if (!scriptUrl) {
    return NextResponse.json({ error: "Script URL not configured" }, { status: 500 });
  }

  try {
    const res = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify(body),
      redirect: "follow",
    });
    console.log("Apps Script response status:", res.status);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Apps Script fetch error:", err);
    return NextResponse.json({ error: "Failed to submit to sheet" }, { status: 500 });
  }
}

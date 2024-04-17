import { kv } from "@vercel/kv";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const slug = req.nextUrl.pathname;
  const url = await kv.get<string>(`link${slug}`);

  console.log(`Redirecting ${slug} to ${url}...`);

  if (!url) {
    return NextResponse.redirect("https://parsertime.app/404", { status: 302 });
  }

  return NextResponse.redirect(url, { status: 302 });
}

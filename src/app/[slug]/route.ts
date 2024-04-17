import { kv } from "@vercel/kv";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  console.log(req.nextUrl.pathname);

  const slug = req.nextUrl.pathname;
  const url = await kv.get<string>(`link${slug}`);

  if (!url) {
    return NextResponse.redirect("https://parsertime.app/404", { status: 302 });
  }

  return NextResponse.redirect(url, { status: 302 });
}
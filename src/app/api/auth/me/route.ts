import { NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";


export async function GET(req: Request) {
  const cookieHeader = req.headers.get("cookie");
  const token = cookieHeader
    ?.split("; ")
    .find((c) => c.startsWith("token="))
    ?.split("=")[1];

  if (!token) {
    return NextResponse.json({ user: null }, { status: 401 });
  }

  const decoded = verifyToken(token);

  if (!decoded) {
    return NextResponse.json({ user: null }, { status: 401 });
  }

  return NextResponse.json({ user: decoded });
}

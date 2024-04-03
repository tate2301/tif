import { NextRequest, NextResponse } from "next/server";

export default function handler(req: NextRequest, res: NextResponse) {
  return res.status(200).json({ message: "Hello from Next.js API!" });
}

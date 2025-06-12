import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "John Doe", email: "fdfdsf" },
    { id: 2, name: "Sam " },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  // You can add logic to save the user here
  return NextResponse.json(body);
}

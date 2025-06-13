import { NextRequest, NextResponse } from "next/server";

interface Props {
  params: {
    id: number;
  };
}

export function GET(request: NextRequest, { params: { id } }: Props) {
  if (id > 10) {
    return new Response("User not found", { status: 404 });
  }
  return new Response(
    JSON.stringify({ id, name: `User ${id}`, email: "fdfds" })
  );
}

export async function PUT(request: NextRequest, { params: { id } }: Props) {
  // Validate the request body
  const body = await request.json();
  if (!body.name) {
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  }
  if (id > 10) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
  return NextResponse.json({ id: 1, name: body.name });
  //if invalid, return 400 Bad Request
  //fetch the user from the database
}

export function DELETE(request: NextRequest, { params: { id } }: Props) {
  if (id > 10) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
  return NextResponse.json({});
}

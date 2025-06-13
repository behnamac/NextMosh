import { NextRequest, NextResponse } from "next/server";
import { productsSchema } from "./schema";

export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 200 },
    { id: 3, name: "Product 3", price: 300 },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = productsSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }
  return NextResponse.json(
    { id: 4, name: body.name, price: body.price },
    { status: 201 }
  );
}

export function PUT(request: NextRequest) {
  return NextResponse.json({ message: "Update all products" });
}
export function DELETE(request: NextRequest) {
  return NextResponse.json({ message: "Delete all products" });
}

import { NextRequest } from "next/server";

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

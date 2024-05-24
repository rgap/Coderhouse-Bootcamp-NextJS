import { NextResponse } from "next/server";
import { comments } from "./data";

export async function GET() {
  return NextResponse.json(comments);
}

export async function POST(request: Request) {
  const comment = await request.json();
  const newComment = {
    id: comments.length + 1,
    text: comment.text,
  };
  return new NextResponse(JSON.stringify(newComment), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}

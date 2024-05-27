import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";
import { comments } from "../data";

export async function GET(_request: Request, { params }: { params: { id: string } }) {
  if (parseInt(params.id) > comments.length) {
    redirect("/comments");
  }
  const comment = comments.find(comment => comment.id === parseInt(params.id));
  return NextResponse.json(comment);
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  const body = await request.json();
  const { text } = body;
  const index = comments.findIndex(comment => comment.id === parseInt(params.id));
  comments[index].text = text;
  return NextResponse.json(comments[index]);
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const index = comments.findIndex(comment => comment.id === parseInt(params.id));
  const deletecComment = comments[index];
  comments.splice(index, 1);
  return NextResponse.json(deletecComment);
}

import { NextResponse } from "next/server";
import { comments } from "./data";

export const GET = () => {
  return NextResponse.json(comments);
};

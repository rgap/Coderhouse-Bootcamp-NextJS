import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const GET = (request: NextRequest) => {
  const requestHeaders = new Headers(request.headers);
  const headerList = headers();

  console.log(requestHeaders.get("Authorization"));
  console.log(headerList.get("Authorization"));

  return new NextResponse("<h1>Profile API data</h1>", {
    headers: {
      "Content-Type": "text/html",
    },
  });
};

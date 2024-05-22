"use client";
export default function ErrorBoundary({ error }: { error: Error }) {
  return (
    //
    <>
      <div>Error in reviewId</div>
      <div>{error.message}</div>
    </>
  );
}

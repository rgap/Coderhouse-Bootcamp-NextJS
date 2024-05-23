"use client";
export default function ErrorBoundary({ error, reset }: { error: Error; reset: () => void }) {
  return (
    //
    <>
      <div>Error in reviewId</div>
      <div>
        {error.message}
        {/* tries to re render the page */}
        <button onClick={reset}>Try again</button>
      </div>
    </>
  );
}

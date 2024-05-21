export default function ReviewDetail({ params }: { params: { productId: string; reviewId: string } }) {
  return (
    //
    <>
      <div>ReviewDetail page</div>
      <div>
        Review {params.reviewId} for product {params.productId}
      </div>
    </>
  );
}

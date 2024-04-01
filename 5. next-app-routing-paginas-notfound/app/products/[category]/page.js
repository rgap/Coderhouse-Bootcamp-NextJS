import React from "react";

export async function generateMetadata({ params, searchParams }, parent) {
  return {
    title: `Product Category: ${params.category}`,
    description: "Product Category Description",
  };
}

export default function Products({ params }) {
  console.log(params);
  return <div>Product Category: {params.category} </div>;
}

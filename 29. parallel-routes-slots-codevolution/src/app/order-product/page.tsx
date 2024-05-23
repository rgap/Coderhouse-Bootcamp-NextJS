"use client";
import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();
  const handleClick = () => {
    console.log("Placing your order");
    router.push("/");
    // router.replace("/"); to replace history stack
    // router.back(); to navigate back in the history stack
    // router.forward(); to navigate forward in the history stack
  };
  return (
    //
    <>
      <h1>Order Product</h1>
      <button onClick={handleClick}>Order Product</button>
    </>
  );
}

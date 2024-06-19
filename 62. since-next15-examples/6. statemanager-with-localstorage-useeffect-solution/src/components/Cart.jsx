"use client";
import { useEffect } from "react";
import { useStore } from "../store/useStore";

// The Cart component displays the cart count and provides buttons to add or remove items
const Cart = () => {
  const cartCount = useStore(state => state.cartCount);
  const addToCart = useStore(state => state.addToCart);
  const removeFromCart = useStore(state => state.removeFromCart);

  useEffect(() => {
    // Retrieve the cart count from localStorage when the component mounts
    const savedCartCount = localStorage.getItem("cartCount");
    if (savedCartCount !== null) {
      useStore.setState({ cartCount: parseInt(savedCartCount) });
    }
  }, []);

  useEffect(() => {
    // Save the cart count to localStorage whenever it changes
    localStorage.setItem("cartCount", cartCount);
  }, [cartCount]);

  return (
    <div>
      <h2>Cart</h2>
      <p>Items in cart: {cartCount}</p>
      <button onClick={addToCart}>Add to Cart</button>
      <button onClick={removeFromCart}>Remove from Cart</button>
    </div>
  );
};

export default Cart;

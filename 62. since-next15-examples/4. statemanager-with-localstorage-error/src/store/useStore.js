import { create } from "zustand";

// Retrieve initial state from local storage or set it to 0
const getInitialState = () => {
  const savedCartCount = localStorage.getItem("cartCount");
  return savedCartCount !== null ? JSON.parse(savedCartCount) : 0;
};

// Define the store with the initial state and actions
const useStore = create(set => ({
  cartCount: getInitialState(),
  addToCart: () =>
    set(state => {
      const newCartCount = state.cartCount + 1;
      localStorage.setItem("cartCount", JSON.stringify(newCartCount));
      return { cartCount: newCartCount };
    }),
  removeFromCart: () =>
    set(state => {
      const newCartCount = state.cartCount > 0 ? state.cartCount - 1 : 0;
      localStorage.setItem("cartCount", JSON.stringify(newCartCount));
      return { cartCount: newCartCount };
    }),
}));

export { useStore };

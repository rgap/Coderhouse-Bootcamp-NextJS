import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    set => ({
      cartCount: 0,
      addToCart: () => set(state => ({ cartCount: state.cartCount + 1 })),
      removeFromCart: () => set(state => ({ cartCount: state.cartCount > 0 ? state.cartCount - 1 : 0 })),
    }),
    {
      name: "cart-storage", // unique name for the localStorage key
    }
  )
);

export { useStore };

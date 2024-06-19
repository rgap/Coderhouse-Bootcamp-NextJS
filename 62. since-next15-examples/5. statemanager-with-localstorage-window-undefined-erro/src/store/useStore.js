import { create } from "zustand";

const useStore = create((set, get) => ({
  cartCount: typeof window !== "undefined" ? localStorage.getItem("cartCount") || 0 : 0,
  addToCart: () => {
    const newCount = get().cartCount + 1;
    set({ cartCount: newCount });
    if (typeof window !== "undefined") {
      localStorage.setItem("cartCount", newCount);
    }
  },
  removeFromCart: () => {
    const currentCount = get().cartCount;
    const newCount = currentCount > 0 ? currentCount - 1 : 0;
    set({ cartCount: newCount });
    if (typeof window !== "undefined") {
      localStorage.setItem("cartCount", newCount);
    }
  },
}));

export { useStore };

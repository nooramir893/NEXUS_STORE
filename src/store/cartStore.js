import { create } from 'zustand';

export const useCartStore = create((set) => ({
  cartItems: [],
  addToCart: (item) =>
    set((state) => {
      // Prevent duplicate items
      const exists = state.cartItems.find((i) => i.id === item.id);
      if (exists) return state;
      return { cartItems: [...state.cartItems, item] };
    }),
  removeFromCart: (id) =>
    set((state) => ({
      cartItems: state.cartItems.filter((i) => i.id !== id),
    })),
  clearCart: () => set({ cartItems: [] }),
}));

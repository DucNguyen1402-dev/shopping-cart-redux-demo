import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: []
};

const cartSlice = createSlice({
    name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
    },

    removeFromCart(state, action) {
      const removeId = action.payload;

      state.items = state.items.filter((item) => item.id !== removeId);
    },

    increaseQty(state, action) {
      const targetId = action.payload;
      const targetItem = state.items.find((item) => item.id === targetId);

      if (targetItem) {
        targetItem.quantity += 1;
      }
    },
    decreaseQty(state, action) {
      const targetId = action.payload;
      const targetItem = state.items.find((item) => item.id === targetId);

      if (!targetItem) return;

      if (targetItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== targetId);
      } else {
        targetItem.quantity -= 1;
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQty, decreaseQty } =
  cartSlice.actions;

export default cartSlice.reducer;



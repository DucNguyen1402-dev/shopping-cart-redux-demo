import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const existingItem = state.find((item) => item.id === product.id);

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
      const targetItem = state.find((item) => item.id === targetId);

      if (targetItem) {
        targetItem.quantity += 1;
      }
    },
    decreaseQty(state, action) {
      const targetId = action.payload;
      const targetItem = state.find((item) => item.id === targetId);

      if (!targetItem) return;

      if (targetItem.quantity === 1) {
        state.items = state.filter((item) => item.id !== targetId);
      } else {
        targetItem += 1;
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQty, decreaseQty } =
  cartSlice.actions;

export default cartSlice.reducer;

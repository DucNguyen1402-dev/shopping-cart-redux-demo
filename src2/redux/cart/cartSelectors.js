export const selectCartItems = (state) => state.cart.items;

export const selectCartCount = (state) =>
  state.cart.items.reduce((acc, curr) => {
    acc += curr.quantity;
    return acc;
  }, 0);

export const selectTotalPrice = (state) =>
  state.cart.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
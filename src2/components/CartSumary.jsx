import { useSelector } from "react-redux";

const selectCartItems = (state) => state.cart.items;

export default function CartSummary() {
  const items = useSelector(selectCartItems);

  const totalItems = items.reduce((acc, curr) => {
    acc += curr.quantity;
    return acc;
  }, 0);

  const totalPrice = items.reduce((acc, curr) => {
    acc += curr.quantity * curr.price;
    return acc;
  }, 0);

  return (
    <div className="space-y-3">
      <h3>Summary</h3>
      <p className="flex gap-2">
        <span>Total items: </span>
        <span>{totalItems}</span>
      </p>
      <p className="flex gap-2">
        <span>Total Price: </span>
        <span>{totalPrice}</span>
      </p>
    </div>
  );
}

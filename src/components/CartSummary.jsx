import { useSelector } from "react-redux";

function CartSummary() {
  const items = useSelector(
    (state) => state.cart.items,
  );

  const totalItems = items.reduce(
    (sum, item) => sum + item.quantity,
    0,
  );

  const totalPrice = items.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0,
  );

  return (
    <div>
      <h3>Summary</h3>

      <p>Total Items: {totalItems}</p>

      <p>Total Price: ${totalPrice}</p>
    </div>
  );
}


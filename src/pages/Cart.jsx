import { useSelector } from "react-redux";

import CartItem from "../components/CartItem.jsx";
import CartSummary from "../components/CartSummary.jsx";

function Cart() {
  const items = useSelector(
    (state) => state.cart.items,
  );

  return (
    <div>
      <h2>Cart</h2>

      {items.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        items.map((item) => (
          <CartItem
            key={item.id}
            item={item}
          />
        ))
      )}

      <CartSummary />
    </div>
  );
}

export default Cart;
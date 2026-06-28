import { useDispatch } from "react-redux";

import {
  increaseQty,
  decreaseQty,
  removeFromCart,
} from "../features/cart/cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div
      style={{
        borderBottom: "1px solid #ddd",
        padding: "12px 0",
      }}
    >
      <h4>{item.name}</h4>

      <p>Price: ${item.price}</p>

      <p>Quantity: {item.quantity}</p>

      <button
        onClick={() =>
          dispatch(increaseQty(item.id))
        }
      >
        +
      </button>

      <button
        onClick={() =>
          dispatch(decreaseQty(item.id))
        }
      >
        -
      </button>

      <button
        onClick={() =>
          dispatch(removeFromCart(item.id))
        }
      >
        Remove
      </button>
    </div>
  );
}

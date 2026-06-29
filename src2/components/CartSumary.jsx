import { useSelector } from "react-redux";
import {selectCartItems, selectCartCount, selectTotalPrice} from "../redux/cart/cartSelectors"

export default function CartSummary() {
  const items = useSelector(selectCartItems);
  const totalPrice = useSelector(selectTotalPrice);
  const totalItems = useSelector(selectCartCount);
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

import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import CartSummary from "../components/CartSumary";

const selectCartItems = (state) => state.cart.items;

function Cart() {
  const items = useSelector(selectCartItems);


  return (
    <div className ="space-y-5">
      <h2 className="text-lg font-bold">Cart</h2>
      {items.length === 0 ? (
        <p>Cart is empty now</p>
      ) : (
        <div className="space-y-3">
          {items.map((item) => (
            <CartItem key = {item.id} item={item} />
          ))}
        </div>
      )}
      <CartSummary />
    </div>
  );
}


export default Cart;

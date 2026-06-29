import { addToCart } from "../features/Cart/CartSlice";
import { useDispatch } from "react-redux";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };
  return (
    <div className="space-y-3 border border-gray-500 rounded-sm p-4">
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <button onClick={handleAddToCart} className ="border-none p-2 rounded-md bg-blue-500 text-white text-sm">Add to cart</button>
    </div>
  );
}

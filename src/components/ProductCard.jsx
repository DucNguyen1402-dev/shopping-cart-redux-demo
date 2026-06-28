import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "12px",
        marginBottom: "12px",
      }}
    >
      <h3>{product.name}</h3>

      <p>${product.price}</p>

      <button onClick={handleAddToCart}>
        Add To Cart
      </button>
    </div>
  );
}

export default ProductCard;
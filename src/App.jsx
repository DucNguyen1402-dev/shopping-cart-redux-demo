import Products from "./pages/Products.jsx";
import Cart from "./pages/Cart.jsx";

function App() {
  return (
    <div
      style={{
        display: "flex",
        gap: "40px",
        padding: "20px",
      }}
    >
      <Products />
      <Cart />
    </div>
  );
}

export default App;
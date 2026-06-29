import Product from "./pages/Product";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="mx-auto my-10 border border-gray-300 rounded-md bg-gray-50 flex justify-between max-w-150 p-4">
      <Product />
      <Cart />
    </div>
  );
}

export default App;

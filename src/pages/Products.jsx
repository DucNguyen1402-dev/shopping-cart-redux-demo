import ProductCard from "../components/ProductCard.jsx";

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 1000,
  },
  {
    id: 2,
    name: "Mouse",
    price: 20,
  },
  {
    id: 3,
    name: "Keyboard",
    price: 50,
  },
];

function Products() {
  return (
    <div>
      <h2>Products</h2>

      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}

export default Products;
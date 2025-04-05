import { useEffect, useState } from "react";
import CartItem from "./components/CartItem";
import CartSummary from "./components/CartSummary";
import Product from "./components/Product";

const PRODUCTS = [
  { id: 1, name: "Laptop", price: 500 },
  { id: 2, name: "Smartphone", price: 300 },
  { id: 3, name: "Headphones", price: 100 },
  { id: 4, name: "Smartwatch", price: 150 },
];

const FREE_GIFT = { id: 99, name: "Wireless Mouse", price: 0 };
const THRESHOLD = 1000;

function App() {
  const [cart, setCart] = useState([]);
  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  useEffect(() => {
    const hasGift = cart.some((item) => item.id === FREE_GIFT.id);
    if (cartTotal >= THRESHOLD && !hasGift) {
      setCart((prev) => [...prev, { ...FREE_GIFT, quantity: 1 }]);
      alert("Congratulations! You have earned a free Wireless Mouse!");
    } else if (cartTotal < THRESHOLD && hasGift) {
      setCart((prev) => prev.filter((item) => item.id !== FREE_GIFT.id));
    }
  }, [cartTotal]);

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart((prev) =>
        prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart((prev) => [...prev, { ...product, quantity: 1 }]);
    }
  };

  const progress = Math.min(100, (cartTotal / THRESHOLD) * 100);

  const updateQuantity = (id, operation) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newQuantity =
            operation === "+" ? item.quantity + 1 : item.quantity - 1;
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="app">
      <h1>Shopping Cart</h1>
      <div>
        <h2>Products</h2>
        <div className="product-list">
          {PRODUCTS.map((product) => (
            <Product key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </div>
      <div className="cart">
        <h2>Cart Summary</h2>
        <CartSummary total={cartTotal} progress={progress} />
      </div>
      <div>
        {cart.length > 0 ? (
          <div className="cart-item-container">
            <h2>Cart Items</h2>
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                updateQuantity={updateQuantity}
                removeFromCart={removeFromCart}
              />
            ))}
          </div>
        ) : (
          <div className="empty-container">
            <h4>Your cart is empty</h4>
            <p>Add some products to see them here!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

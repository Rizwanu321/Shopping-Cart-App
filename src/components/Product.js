import React from "react";

const Product = ({ product, addToCart }) => {
  return (
    <div className="product">
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <button onClick={() => addToCart(product)} className="add-btn">
        Add to Cart
      </button>
    </div>
  );
};

export default Product;

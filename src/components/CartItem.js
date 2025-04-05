import React from "react";

const CartItem = ({ item, updateQuantity, removeFromCart }) => {
  const total = item.price * item.quantity;
  const handleQuantity = (id, operation) => {
    if (operation === "-" && item.quantity === 1) {
      removeFromCart(id);
    } else {
      updateQuantity(id, operation);
    }
  };
  return (
    <div className="cart-item">
      <div>
        <h3>{item.name}</h3>
        <p className="item-price">
          ₹{item.price} x {item.quantity} = ₹{total}
        </p>
      </div>
      <div className="quantity-selector">
        {item.id === 99 ? (
          <p className="free-gift">FREE GIFT</p>
        ) : (
          <>
            <button
              onClick={() => handleQuantity(item.id, "-")}
              className="minus-button"
            >
              -
            </button>
            <span>{item.quantity}</span>
            <button
              onClick={() => handleQuantity(item.id, "+")}
              className="plus-button"
            >
              +
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CartItem;

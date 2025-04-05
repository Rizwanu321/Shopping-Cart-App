import React from "react";

const CartSummary = ({ total, progress }) => {
  const remaining = Math.max(0, 1000 - total);
  return (
    <div className="cart-summary">
      <div className="total-container">
        <p>Subtotal:</p>
        <p className="subtotal-item">₹{total}</p>
      </div>
      <hr />
      {total < 1000 ? (
        <div className="progress-container">
          <p>Add ₹{remaining} more to get a free Wireless Mouse!</p>
          <div className="progress-bar">
            <div style={{ width: `${progress}%` }}></div>
          </div>
        </div>
      ) : (
        <p>You got a free Wireless Mouse!</p>
      )}
    </div>
  );
};

export default CartSummary;

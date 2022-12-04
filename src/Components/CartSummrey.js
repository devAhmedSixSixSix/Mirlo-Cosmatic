import React from "react";

function CartSummrey({ cart }) {
  const bg = {
    background: "#093F65",
  };
  const priceArr = [0];
  const price =
    cart && cart.map((item) => priceArr.push(item.quan * item.price));
  const fullPrice = priceArr.reduce((prev, next) => prev + next);
  return (
    <div className="text-white px-4 py-5 rounded" style={bg}>
      <h2>Products</h2>
      {cart.map((item) => (
        <div className="d-flex justify-content-between">
          <p>
            {item.title.length <= 16
              ? item.title
              : item.title.substring(0, 10) + "... "}
          </p>
          <p>${item.price}</p>
        </div>
      ))}
      <h2>Shipping</h2>
      <p>Flat Shipping Rate: $25</p>
      <div>
        <h2>Subtotal:</h2>
        <h6>${fullPrice}</h6>
        <h2>Total:</h2>
        <h6>${cart.length <= 0 ? 0 : fullPrice + 25}</h6>
      </div>
    </div>
  );
}

export default CartSummrey;

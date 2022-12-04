import React from "react";
import Button from "react-bootstrap/esm/Button";

function CartProductCard({
  cart,
  removeItemFromCart,
  removeItemFromWishlist,
  addToCart,
  bgColor,
  btnText,
}) {
  return (
    <div className="my-3">
      {cart &&
        cart.map((item) => (
          <div className="d-flex align-items-center gap-5 border rounded p-3 mb-3">
            <img
              src={item.thumbnail}
              alt="test"
              width={200}
              className="rounded"
            />
            <div>
              <h4>{item.title}</h4>
              <h5 className="text-danger">${item.price}</h5>
              <h6 className="text-success">In Stock</h6>
              <h6>Quantiy: {item.quan}</h6>
              {bgColor === "danger" ? (
                <Button
                  variant={bgColor}
                  onClick={() => removeItemFromCart(item)}
                >
                  {btnText}
                </Button>
              ) : (
                (
                  <Button variant={bgColor} onClick={() => addToCart(item)}>
                    {btnText}
                  </Button>
                ) && (
                  <Button
                    variant={bgColor}
                    onClick={() => {
                      addToCart(item);
                      removeItemFromWishlist(item);
                    }}
                  >
                    {btnText}
                  </Button>
                )
              )}
            </div>
          </div>
        ))}
    </div>
  );
}

export default CartProductCard;

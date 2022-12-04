import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { GiHeartPlus } from "react-icons/gi";

function ProductInfo({ data, addToCart, addToWishlist }) {
  const btnBg = {
    background: "#093F65",
    border: 0,
  };
  return (
    <div>
      <div className="d-flex align-items-center mt-3">
        <AiOutlineStar />
        <AiOutlineStar />
        <AiOutlineStar />
        <AiOutlineStar />
        <AiOutlineStar />
        <span className="ps-4">{data.rating}</span>
      </div>
      <h2 className="py-3">{data.title}</h2>
      <h6>
        <span className="text-muted">category: </span>
        {data.category}
      </h6>
      <h6>
        <span className="text-muted">brand: </span>
        {data.brand}
      </h6>
      <p className="text-muted">{data.description}</p>
      <div className="d-flex align-items-center justify-content-between">
        <h4>${data.price}</h4>
        <button
          className="bg-body border-0"
          onClick={() => addToWishlist(data)}
        >
          <GiHeartPlus />
        </button>
      </div>
      <p className="text-muted">30ML</p>
      <button
        style={btnBg}
        onClick={() => addToCart(data)}
        className="py-2 px-5 mt-3 rounded text-white w-100"
      >
        Place Order
      </button>
    </div>
  );
}

export default ProductInfo;

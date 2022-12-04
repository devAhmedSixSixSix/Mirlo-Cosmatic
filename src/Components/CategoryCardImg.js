import React from "react";

function CategoryCardImg({ image }) {
  return (
    <div>
      <img src={image} alt="Category" className="w-100" />
    </div>
  );
}

export default CategoryCardImg;

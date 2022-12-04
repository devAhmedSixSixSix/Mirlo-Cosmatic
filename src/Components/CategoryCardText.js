import React from "react";

function CategoryCardText({ title, numProduct }) {
  return (
    <div>
      <h4>{title}</h4>
      <p className="text-muted">{numProduct}</p>
    </div>
  );
}

export default CategoryCardText;

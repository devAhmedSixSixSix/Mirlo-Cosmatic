import React from "react";

function SupportCard({ icon, title }) {
  return (
    <div className="text-center">
      <span>{icon}</span>
      <h5 className="my-3">{title}</h5>
      <p className="text-muted">
        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit...
      </p>
    </div>
  );
}

export default SupportCard;

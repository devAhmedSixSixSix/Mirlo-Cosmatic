import React from "react";

function OurTeamCard({ name, jobTitle, img }) {
  const btnStyle = {
    background: "none",
    border: "solid 1px",
    borderColor: "#eee #eee #ccc #eee",
  };
  return (
    <div className="py-3 text-center">
      <img src={img} alt="test" className="mb-2 rounded-circle" />
      <h5>{name}</h5>
      <p className="text-muted">{jobTitle}</p>
      <button style={btnStyle} className="py-1 px-3 me-2">
        Learn More
      </button>
    </div>
  );
}

export default OurTeamCard;

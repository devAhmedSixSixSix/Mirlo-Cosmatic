import React from "react";
import Container from "react-bootstrap/esm/Container";
import img from "../Assest/Images/BannerBg.jpg";
function SectionBanner({ title, subTitle }) {
  const bg = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "170px",
  };
  return (
    <div style={bg} className="text-white pt-5">
      <Container>
        <p className="text-light">{subTitle}</p>
        <h3>{title}</h3>
      </Container>
    </div>
  );
}

export default SectionBanner;

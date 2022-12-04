import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Button from "react-bootstrap/esm/Button";
import BannerModel from "../Assest/Images/BannerModel.png";
import BannerBg from "../Assest/Images/BannerBg.jpg";
import { Link } from "react-router-dom";

function HeroBanner() {
  const Bg = {
    backgroundImage: `url(${BannerBg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "fit-content",
  };
  const btnBg = {
    background: "#093F65",
    border: 0,
  };
  return (
    <div style={Bg} className="text-center">
      <Container>
        <Row>
          <Col className="d-flex align-items-center text-white py-5">
            <div className="text-center text-lg-start">
              <h2 className="pb-3">
                Choose The Best <br />
                For Your Skin
              </h2>
              <p className="pb-2 text-xs-center text-lg-start">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                iaculis ex eget enim posuere, a semper urna porta. Maecenas
                commodo, nulla quis varius euismod.
              </p>
              <Link to="shop">
                <Button style={btnBg} className="px-5 py-2">
                  Shop Now
                </Button>
              </Link>
            </div>
          </Col>
          <Col className="d-none d-lg-block">
            <img src={BannerModel} alt="MakeUp-Model" className="w-100" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HeroBanner;

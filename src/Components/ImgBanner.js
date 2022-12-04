import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import imgOne from "../Assest/Images/modelOne.jpg";
import imgTwo from "../Assest/Images/modeTwo.jpg";
import imgThree from "../Assest/Images/modeThree.jpg";

function ImgBanner() {
  return (
    <div className="py-5">
      <Container>
        <Row>
          <Col>
            <img src={imgOne} alt="test" className="w-100 h-100" />
          </Col>
          <Col>
            <img src={imgTwo} alt="test" className="w-100 h-100" />
          </Col>
          <Col>
            <img src={imgThree} alt="test" className="w-100 h-100" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ImgBanner;

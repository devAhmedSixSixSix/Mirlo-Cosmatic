import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import img from "../Assest/Images/GoogleMap.png";

function ContactUsLocation() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <img src={img} alt="test" className="w-100" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactUsLocation;

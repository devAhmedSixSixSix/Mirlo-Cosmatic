import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import img from "../Assest/Images/CategoryWomen.jpg";

function SomeInfo({ title }) {
  const imgStyle = {
    transform: "scale(0.8, 1.3)",
  };
  return (
    <div className="bg-light py-5 my-5">
      <Container>
        <Row className="d-flex align-items-center">
          <Col lg={7}>
            <img
              src={img}
              alt="test"
              className="w-100 h-100"
              style={imgStyle}
            />
          </Col>
          <Col className="text-center">
            <h2 className=" pt-5 mt-5 mb-3">{title}</h2>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              iaculis ex eget enim posuere, a semper urna porta. Maecenas
              commodo, nulla quis varius euismod, quam libero lacinia ligula,
              sit amet vestibulum ante elit eu nibh. Curabitur hendrerit
              fermentum felis in porta. Sed suscipit augue vitae iaculis
              hendrerit. Vivamus placerat lacinia diam. Cras venenatis, metus
              dictum porta mattis, nisl eros ultricies neque, at porta diam diam
              at dolor. Quisque fringilla vehicula viverra.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SomeInfo;

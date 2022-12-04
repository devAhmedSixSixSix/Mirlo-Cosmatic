import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import CategoryCardImg from "./CategoryCardImg";
import CategoryCardText from "./CategoryCardText";

function CategoryCardTextLeft({ title, numProduct, image }) {
  return (
    <div className="py-2">
      <Row className="d-flex align-items-center">
        <Col sm={2} className="">
          <CategoryCardText title={title} numProduct={numProduct} />
        </Col>
        <Col sm={10}>
          <CategoryCardImg image={image} className="" />
        </Col>
      </Row>
    </div>
  );
}

export default CategoryCardTextLeft;

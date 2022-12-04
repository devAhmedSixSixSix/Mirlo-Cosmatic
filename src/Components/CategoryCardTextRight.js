import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import CategoryCardImg from "./CategoryCardImg";
import CategoryCardText from "./CategoryCardText";

function CategoryCardTextRight({ numProduct, title, image }) {
  return (
    <div className="py-2">
      <Row className="d-flex align-items-center">
        <Col sm={10} className="order-2 order-lg-1">
          <CategoryCardImg image={image} />
        </Col>
        <Col sm={2} className="order-1 order-lg-2">
          <CategoryCardText title={title} numProduct={numProduct} />
        </Col>
      </Row>
    </div>
  );
}

export default CategoryCardTextRight;

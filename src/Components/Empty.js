import React from "react";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { Link } from "react-router-dom";

function Empty({ title }) {
  const btnBg = {
    background: "#093F65",
    border: 0,
  };
  return (
    <div className="my-5">
      <Row>
        <Col className="text-center y-5 ">
          <h2 className="pb-4">{title} Is Empty</h2>
          <Link to="/shop">
            <Button style={btnBg}>Shop Now</Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
}

export default Empty;

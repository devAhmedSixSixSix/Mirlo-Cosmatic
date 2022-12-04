import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import CartSummrey from "../Components/CartSummrey";
import CheckOutForm from "../Components/CheckOutForm";
import SectionBanner from "../Components/SectionBanner";

function CheckOut({ cart }) {
  return (
    <div>
      <SectionBanner title="Checkout" subTitle="Home / Checkout" />
      <Container className="py-5">
        <Row>
          <Col lg={8}>
            <CheckOutForm />
          </Col>
          <Col lg={4}>
            <CartSummrey cart={cart} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CheckOut;

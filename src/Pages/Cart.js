import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/esm/Form";
import CartProductCard from "../Components/CartProductCard";
import CartSummrey from "../Components/CartSummrey";
import SectionBanner from "../Components/SectionBanner";
import { Link } from "react-router-dom";
import Empty from "../Components/Empty";

function Cart({ cart, removeItemFromCart }) {
  const btnBg = {
    background: "#093F65",
    border: 0,
  };
  return (
    <div>
      <SectionBanner title="Cart" subTitle="Home / Cart" />
      <Container className="py-5">
        {cart.length <= 0 ? (
          <Empty title="Cart" />
        ) : (
          <Row>
            <Col lg={8}>
              <CartProductCard
                bgColor="danger"
                btnText="Remove From Cart"
                cart={cart}
                removeItemFromCart={removeItemFromCart}
              />
              <div className="text-center my-5 py-5 px-3 border rounded">
                <h3>Applay Gift Card</h3>
                <p className="text-muted">
                  Applay Your Gift Card And Get 30% Off
                </p>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      type="email"
                      placeholder="Applay Gift Card Number"
                    />
                  </Form.Group>

                  <button
                    style={btnBg}
                    className="rounded text-white py-2 px-5 w-25"
                  >
                    Submit
                  </button>
                </Form>
              </div>
            </Col>
            <Col lg={4}>
              <CartSummrey cart={cart} />
              <Link to="/cart/checkout">
                <button
                  style={btnBg}
                  className="py-2 px-5 mt-3 rounded text-white w-100"
                >
                  Process To Check Out
                </button>
              </Link>
              <Link
                to="../Shop"
                className="mt-5 text-center text-decoration-none "
              >
                <p className="pt-3">Continue Shopping</p>
              </Link>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
}

export default Cart;

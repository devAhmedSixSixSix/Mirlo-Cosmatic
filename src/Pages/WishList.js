import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import CartProductCard from "../Components/CartProductCard";
import Empty from "../Components/Empty";
import SectionBanner from "../Components/SectionBanner";

function WishList({ wishlist, removeItemFromWishlist, addToCart }) {
  return (
    <div>
      <SectionBanner title="Wishlist" subTitle="Home / Wishlist" />
      <Container className="py-5">
        <Row>
          <Col>
            {wishlist.length <= 0 ? (
              <Empty title="Wishlist" />
            ) : (
              <CartProductCard
                bgColor="primary"
                btnText="Add To Cart"
                cart={wishlist}
                removeItemFromWishlist={removeItemFromWishlist}
                addToCart={addToCart}
              />
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default WishList;

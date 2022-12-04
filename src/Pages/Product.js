import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Accordion from "react-bootstrap/esm/Accordion";
import ProductInfo from "../Components/ProductInfo";
import SectionBanner from "../Components/SectionBanner";
import SomeProduct from "../Components/SomeProduct";
import { useParams } from "react-router-dom";
import ProductGallery from "../Components/ProductGallery";
import Spinner from "react-bootstrap/Spinner";

function Product({ filterdData, addToCart, addToWishlist }) {
  const skincare =
    filterdData && filterdData.filter((item) => item.category !== "skincare");
  const [data, setData] = useState(null);
  const id = useParams();
  useEffect(() => {
    const fetchData = () => {
      fetch(`https://dummyjson.com/products/${id.id}`)
        .then((response) => response.json())
        .then((data) => setData(data));
    };
    fetchData();
  }, [id]);

  return (
    <div>
      <SectionBanner title="Product" subTitle="Home / Shop / Product" />
      <Container className="py-5">
        {data === null ? (
          <div className="d-flex justify-content-center align-items-center my-5">
            <Spinner animation="border" />
          </div>
        ) : (
          <Row>
            <Col xm={12} lg={6}>
              <ProductGallery data={data} />
            </Col>
            <Col xm={12} lg={6}>
              <Row>
                <Row>
                  <Col>
                    {data && (
                      <ProductInfo
                        data={data}
                        addToCart={addToCart}
                        addToWishlist={addToWishlist}
                      />
                    )}
                  </Col>
                </Row>
                <Row>
                  <Col className="mt-3">
                    <Accordion defaultActiveKey="0">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>Description</Accordion.Header>
                        <Accordion.Body>
                          {data && data.description}
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>Review</Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Col>
                </Row>
              </Row>
            </Col>
          </Row>
        )}
        <Row className="py-3">
          <Col>
            <SomeProduct
              title="Other Product"
              filterdData={skincare}
              length={4}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Product;

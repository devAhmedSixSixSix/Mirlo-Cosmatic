import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import SomeProductCard from "./SomeProductCard";
import Spinner from "react-bootstrap/Spinner";

function SomeProduct({ title, filterdData }) {
  return (
    <div className="py-5">
      <Container>
        <Row>
          <div className="py-3">
            <h2 className="pb-2">{title}</h2>
            <p className="text-muted">
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              <br />
              consectetur, adipisci velit...
            </p>
          </div>
        </Row>
        <Row>
          {filterdData === null ? (
            <div className="d-flex justify-content-center align-items-center my-5">
              <Spinner animation="border" />
            </div>
          ) : (
            <SomeProductCard filterdData={filterdData} />
          )}
        </Row>
      </Container>
    </div>
  );
}

export default SomeProduct;

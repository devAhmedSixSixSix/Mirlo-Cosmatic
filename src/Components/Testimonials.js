import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import img from "../Assest/Images/review.jpg";

function Testimonials() {
  return (
    <div className="py-5">
      <Container>
        <Row>
          <Col xs={12} lg={6}>
            <img src={img} alt="test" className="w-100" />
          </Col>
          <Col xs={12} lg={6}>
            <h2 className="pt-3">
              Latest Buyers <br /> Reviews
            </h2>
            <p>
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit...
            </p>
            <div className="bg-light py-3 px-5">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent et hendrerit velit. Duis ac dapibus est. Mauris purus
                eros, placerat sit amet ipsum et, iaculis hendrerit tellus.
                Quisque viverra quam ex. Aenean rhoncus turpis a tempor
                dignissim. Vestibulum ac ante eu felis ullamcorper vulputate ac
                a lectus. Morbi purus neque, aliquet ac maximus vel, interdum in
                nisi. Aenean viverra felis eu suscipit cursus. Morbi et tellus
                ante. Aliquam at lacus eget leo finibus consequat sed
                scelerisque augue.
              </p>
              <h5 className="pb-0 mb-0">TOTA</h5>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Testimonials;

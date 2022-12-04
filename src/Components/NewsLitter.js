import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/esm/Form";
import Button from "react-bootstrap/esm/Button";
import bgImg from "../Assest/Images/makeupBrushes.jpg";

function NewsLitter() {
  const bg = {
    backgroundImage: `url(${bgImg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  const overlay = {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(9, 63, 101, .9)",
  };
  return (
    <div style={bg} className="text-white">
      <div style={overlay} className="py-5 ">
        <Container>
          <Row>
            <div className="text-center">
              <h2>
                Be The Frist To Know All <br /> The New Product
              </h2>
              <p className="w-50 m-auto">
                Aenean rhoncus turpis a tempor dignissim. Vestibulum ac ante eu
                felis ullamcorper vulputate ac a lectus.
              </p>
            </div>
            <div>
              <Form>
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    className="my-2"
                  />
                  <Form.Text className="text-white text-left">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                <Button variant="primary" className="w-25 d-block m-auto">
                  Submit
                </Button>
              </Form>
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default NewsLitter;

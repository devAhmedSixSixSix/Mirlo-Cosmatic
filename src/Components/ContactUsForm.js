import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/esm/Form";
import bgImg from "../Assest/Images/makeupBrushes.jpg";
import Button from "react-bootstrap/esm/Button";

function ContactUsForm() {
  const bg = {
    backgroundImage: `url(${bgImg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  const overlay = {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(9, 63, 101, .8)",
  };
  return (
    <div style={bg}>
      <div style={overlay} className="py-5 text-white">
        <Container>
          <Row>
            <Col>
              <Form>
                <Row>
                  <Col>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                      />
                      <Form.Text className="text-white">
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Your Name</Form.Label>
                      <Form.Control type="text" placeholder="Your Name" />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Massage</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button className="d-block m-auto w-50 mt-5">
                  Send Massage
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default ContactUsForm;

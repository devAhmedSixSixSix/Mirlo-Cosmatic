import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { TiSocialTwitter, TiSocialFacebook } from "react-icons/ti";
function Footer() {
  const Bg = {
    background: "#093F65",
  };
  return (
    <div style={Bg} className="d-flex justify-content-center text-light py-5">
      <Container>
        <Row>
          <Col xs={12} lg={3}>
            <h2 className="text-white">Mirlo</h2>
            <p>
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit...
            </p>
            <div className="d-flex">
              <TiSocialTwitter size={44} />
              <TiSocialFacebook size={44} />
            </div>
          </Col>
          <Col xs={12} lg={3} className="text-center">
            <h2 className="text-white pb-3">Head Line</h2>
            <ul className="list-inline">
              <li className="pb-2">Link</li>
              <li className="pb-2">Link</li>
              <li className="pb-2">Link</li>
            </ul>
          </Col>
          <Col xs={12} lg={3} className="text-center">
            <h2 className="text-white pb-3">Head Line</h2>
            <ul className="list-inline">
              <li className="pb-2">Link</li>
              <li className="pb-2">Link</li>
              <li className="pb-2">Link</li>
            </ul>
          </Col>
          <Col xs={12} lg={3} className="text-center">
            <h2 className="text-white pb-3">Head Line</h2>
            <ul className="list-inline">
              <li className="pb-2">Link</li>
              <li className="pb-2">Link</li>
              <li className="pb-2">Link</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;

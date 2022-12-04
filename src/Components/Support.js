import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { GiClockwork, GiEarthAfricaEurope } from "react-icons/gi";
import { AiOutlineDollarCircle } from "react-icons/ai";
import SupportCard from "./SupportCard";

function Support() {
  return (
    <div className="py-5">
      <Container>
        <Row>
          <Col sm={12} lg={4}>
            <SupportCard
              icon={<AiOutlineDollarCircle size={44} />}
              title="Saftey Payment"
            />
          </Col>
          <Col sm={12} lg={4}>
            <SupportCard
              icon={<GiEarthAfricaEurope size={44} />}
              title="Worldwide Shipping"
            />
          </Col>
          <Col sm={12} lg={4}>
            <SupportCard
              icon={<GiClockwork size={44} />}
              title="24/7 Support"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Support;

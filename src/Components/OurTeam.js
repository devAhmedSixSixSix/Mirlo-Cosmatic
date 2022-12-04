import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import OurTeamCard from "./OurTeamCard";
import avatar1 from "../Assest/Images/avatar-01.png";
import avatar2 from "../Assest/Images/avatar-02.png";
import avatar3 from "../Assest/Images/avatar-03.png";
import avatar4 from "../Assest/Images/avatar-04.png";

function OurTeam() {
  return (
    <div>
      <Container>
        <Row>
          <Col sm={12} lg={3}>
            <OurTeamCard name="Tota" jobTitle="Founder" img={avatar1} />
          </Col>
          <Col sm={12} lg={3}>
            <OurTeamCard name="Bebo" jobTitle="CO-Founder" img={avatar2} />
          </Col>
          <Col sm={12} lg={3}>
            <OurTeamCard name="Marko" jobTitle="Designer" img={avatar3} />
          </Col>
          <Col sm={12} lg={3}>
            <OurTeamCard name="Bolo" jobTitle="Devloper" img={avatar4} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default OurTeam;

import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { RiShoppingCartFill } from "react-icons/ri";
import { GiHeartPlus } from "react-icons/gi";

function NavigationBar() {
  return (
    <Navbar style={{ backgroundColor: "#093f65" }} sticky="top" expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="text-white">
          Miralio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-lg`}
          aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title
              id={`offcanvasNavbarLabel-expand-lg`}
              className="text-white"
            >
              Miralio
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="me-auto text-white">
              <Nav.Link as={Link} to="/" className="text-white">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="shop" className="text-white">
                Shop
              </Nav.Link>
              <Nav.Link as={Link} to="aboutus" className="text-white">
                About us
              </Nav.Link>
              <Nav.Link as={Link} to="contactus" className="text-white">
                Contact us
              </Nav.Link>
            </Nav>
            <Nav className="d-inline my-auto">
              <Nav.Link
                as={Link}
                to="cart"
                className="text-white d-inline me-3"
              >
                <RiShoppingCartFill />
              </Nav.Link>
              <Nav.Link as={Link} to="wishlist" className="text-white d-inline">
                <GiHeartPlus />
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;

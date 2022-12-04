import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/esm/Navbar";
import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/esm/Nav";
import { RiShoppingCartFill } from "react-icons/ri";
import { GiHeartPlus } from "react-icons/gi";

function NavigationBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="text-white">
          Miralio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
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
          <Nav>
            <Nav.Link as={Link} to="cart" className="text-white">
              <RiShoppingCartFill />
            </Nav.Link>
            <Nav.Link as={Link} to="wishlist" className="text-white">
              <GiHeartPlus />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;

import React from 'react'
import { Container, Navbar, Nav } from "react-bootstrap";
function Header() {
    return (
      <Navbar className="navbar" bg="dark" expand="lg" variant="dark">
        <Container className="navbar-container">
          <Navbar.Brand href="/">
            {""}
            <h1 className="brand-text">K / G</h1>
          </Navbar.Brand>
  
          <Navbar.Toggle />
          <Navbar.Collapse collapseOnSelect>
            <Nav
              className="me-auto nav-links justify-content-end"
              style={{ width: "100%" }}
            >
              <Nav.Link href="/" className="nav-link">Home</Nav.Link>
              <Nav.Link href="/about" className="nav-link">About</Nav.Link>
              <Nav.Link href="/contact" className="nav-link">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default Header;

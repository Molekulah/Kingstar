import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const TopBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Kingstar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/resources">Resources</Nav.Link>
            <Nav.Link href="/shop">Shop</Nav.Link>
            <Nav.Link href="/battling">Battling</Nav.Link>
          </Nav>
        </Container>
      </Navbar>{" "}
    </div>
  );
};

export default TopBar;

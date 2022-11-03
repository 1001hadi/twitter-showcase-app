import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import "../App.css";

const NavBar = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/">MAGIC TWEET</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to={"/"}>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to={"/search"}>
            Search
          </Nav.Link>
          <Nav.Link as={Link} to={"/random"}>
            Random Twitt
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar } from "react-bootstrap";
import "../App.css";

const Footer = () => {
  return (
    <div className="footer">
      <Navbar bg="primary" variant="dark">
        <Container>
          {/* <Navbar.Brand href="/">MAGIC TWITT</Navbar.Brand> */}
          <h5>MAGIC TWEET</h5>
          <h6> copyright &copy; Magic Twitt 2022</h6>
        </Container>
      </Navbar>
    </div>
  );
};

export default Footer;

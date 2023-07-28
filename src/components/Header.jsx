import React from "react";
import { Button, Container } from "react-bootstrap";

export default function Header() {
  return (
    <Container fluid className="navBar">
      <div></div>
      <div className="d-flex justify-content-left">
      <a>Home</a>
      <a>About Me</a>
      <a>Proyects</a>
      <a>Contact</a>
      </div>
    </Container>
  );
}

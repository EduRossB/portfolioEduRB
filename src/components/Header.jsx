import React from "react";
import { Container, Image } from "react-bootstrap";

export default function Header() {
  return (
    <Container fluid className="navBar">
      <div className="navBarLogo">
        <img src="../src/img/logoNavBar.png" alt="logoNavbar"/>
      </div>
      <div className="navBarLinks">
        <button className="buttonNavBar">Home</button>
        <button className="buttonNavBar">About me</button>
        <button className="buttonNavBar">Proyects</button>
        <button className="buttonNavBar">Contact</button>
      </div>
    </Container>
  );
}

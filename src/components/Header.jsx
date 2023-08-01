import React from "react";
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import logoNavBar from "../img/logoNavBar.png";

export default function Header() {
  return (
    <Navbar expand="lg" className="navBar">
      <Container>
        <Navbar.Brand className="navBarLogo" href="/">
          <img src={logoNavBar} className="logoNavBar" alt="logoNavbar" />
        </Navbar.Brand>
        <Navbar.Toggle
          className="collapseButton"
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Button className="buttonNavBar">Home</Button>
            <Button className="buttonNavBar">About me</Button>
            <Button className="buttonNavBar">Projects</Button>
            <Button className="buttonNavBar">Contact</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

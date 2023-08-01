import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import logoNavBar from "../img/logoNavBar.png";
import { Link, BrowserRouter, Route } from "react-router-dom";
import Home from '../pages/Home'

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
          <BrowserRouter>
            <Nav className="ms-auto">
              <Link to="/" className="buttonNavBar">
                Home
              </Link>
              <Link to="/aboutme" className="buttonNavBar">
                About me
              </Link>
              <Link to="/projects" className="buttonNavBar">
                Projects
              </Link>
              <Link to="/contact" className="buttonNavBar">
                Contact
              </Link>
            </Nav>
            <Route path="/"><Home/></Route>
            <Route path="/contact"><Contact/><</Route>
            <Route path="/"><</Route>
            <Route path="/"></Route>
          </BrowserRouter>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

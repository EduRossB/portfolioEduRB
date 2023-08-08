import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logoNavBar from "../img/logoNavBar.png";
import { Link, NavLink } from "react-router-dom";

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
            <NavLink className={({ isActive, isPending }) =>
                      isActive
                        ? "active buttonNavBar"
                        : isPending
                        ? "pending buttonNavBar"
                        : ""
                    } to='/'>Home</NavLink>
            <Link activeClassName="active" to='/aboutme' className="buttonNavBar">About me</Link>
            <Link activeClassName="active" to='/projects' className="buttonNavBar">Projects</Link>
            <Link activeClassName="active" to='/contact' className="buttonNavBar">Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

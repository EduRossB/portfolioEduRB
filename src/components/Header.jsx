import React, { useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logoNavBar from "../img/logoNavBar.png";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function Header() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
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
            <NavLink
              className={({ isActive, isPending }) =>
                isActive
                  ? "active buttonNavBar"
                  : isPending
                  ? "pending buttonNavBar"
                  : "pending buttonNavBar"
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive, isPending }) =>
                isActive
                  ? "active buttonNavBar"
                  : isPending
                  ? "pending buttonNavBar"
                  : "pending buttonNavBar"
              }
              to="/aboutme"
            >
              About me
            </NavLink>
            <NavLink
              className={({ isActive, isPending }) =>
                isActive
                  ? "active buttonNavBar"
                  : isPending
                  ? "pending buttonNavBar"
                  : "pending buttonNavBar"
              }
              to="/projects"
            >
              Projects
            </NavLink>
            <NavLink
              className={({ isActive, isPending }) =>
                isActive
                  ? "active buttonNavBar"
                  : isPending
                  ? "pending buttonNavBar"
                  : "pending buttonNavBar"
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

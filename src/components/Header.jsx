import React from "react";
import { Navbar, Nav, NavDropdown, Container, Button} from "react-bootstrap";
import logoNavBar from "../img/logoNavBar.png";

export default function Header() {
  return (
    <Navbar expand="lg" className="navBar">
      <Container>
        <Navbar.Brand className="navBarLogo" href="#home"><img src={logoNavBar} className='logoNavBar' alt="logoNavbar"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Button className="buttonNavBar">Home</Button>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

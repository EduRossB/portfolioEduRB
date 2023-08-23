import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Contact() {
  return (
    <Container fluid className="mainContainerContact row">
      <Container className="col-12 col-lg-6 my-3 contactForm">
        <Form className="w-75">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="fs-3 text-light display-5">Name</Form.Label>
            <Form.Control type="email" placeholder="Enter your name" />
            <Form.Text className="text-muted">
              It's not necessary to provide your real name.
            </Form.Text>
          </Form.Group>

          <Form.Group
            className="mb-3 fs-3 text-light display-5"
            controlId="formBasicPassword"
          >
            <Form.Label>Tips</Form.Label>
            <Form.Control
              as="textarea" style={{ maxHeight: '150px' }}placeholder="All recommendations are welcome"
            />
          </Form.Group>
          <Button variant="light" className="mt-4" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
      <Container className="col-12 col-lg-6 my-3">
        <aside className="top">
          <a href="https://github.com/EduRossB" target="_blank" rel="noreferrer" className="itemContact item1">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/eduardo-ross-barb%C3%A1-1b1784152/" target="_blank" rel="noreferrer" className="itemContact item2">
            <FaLinkedin />
          </a>
        </aside>
        <aside className="bottom">
          <a href="https://www.instagram.com/edu.rossb/" target="_blank" rel="noreferrer" className="itemContact item3">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/edu.rossbarba" target="_blank" rel="noreferrer" className="itemContact item4">
            <FaFacebookF />
          </a>
        </aside>
      </Container>
    </Container>
  );
}

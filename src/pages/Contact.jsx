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
          <article className="itemContact item1">
            <FaGithub />
          </article>
          <article className="itemContact item2">
            <FaLinkedin />
          </article>
        </aside>
        <aside className="bottom">
          <article className="itemContact item3">
            <FaInstagram />
          </article>
          <article className="itemContact item4">
            <FaFacebookF />
          </article>
        </aside>
      </Container>
    </Container>
  );
}

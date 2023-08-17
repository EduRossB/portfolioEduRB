import React from "react";
import { Container } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Contact() {
  return (
    <Container fluid className="row m-0 p-0 justify-content-center">
      <Container className="mainContainerContact">
        <aside className="top">
          <article className="itemContact item1"><FaGithub/></article>
          <article className="itemContact item2"><FaLinkedin/></article>
        </aside>
        <aside className="bottom">
          <article className="itemContact item3"><FaInstagram/></article>
          <article className="itemContact item4"><FaFacebookF/></article>
        </aside>
      </Container>
    </Container>
  );
}

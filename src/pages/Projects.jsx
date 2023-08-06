import React from "react";
import { Container } from "react-bootstrap";

export default function Projects() {
  return (
    <Container>
      <h1 className="subtitle">Projects</h1>
      <Container className="row text-center">
        <section className="projectsGroup col-sm-12 col-lg-4">
          <h4 className="fs-5 w-100">Group Projects</h4>
          <div className="row w-100 p-0 m-0">
            <aside className="projectItem col-6">Hola</aside>
            <aside className="projectItem col-6">Hola</aside>
          </div>
        </section>
        <section className="projectsGroup col-sm-12 col-lg-4">
          <h4 className="fs-5 w-100">Training Projects</h4>
          <div className="row w-100 p-0 m-0">
            <aside className="projectItem col-6">Hola</aside>
            <aside className="projectItem col-6">Hola</aside>
          </div>
        </section>
        <section className="projectsGroup col-sm-12 col-lg-4">
          <h4 className="fs-5 w-100">Main Project</h4>
          <aside className="projectItem"></aside>
        </section>
      </Container>
    </Container>
  );
}

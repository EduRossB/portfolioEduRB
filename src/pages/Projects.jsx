import React from "react";
import { Container } from "react-bootstrap";
import calculatorProject from "../img/calculatorProject.jpg";
import marketProject from "../img/marketGroupProject.png";
import timerPorject from "../img/timerProject.png";
import moviesProject from "../img/movieGroupProject.png";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <Container>
      <Container className="row justify-content-center text-center text-light mx-1">
        <section className="projectsGroup col-sm-11 my-5">
          <h4 className="fs-5 w-100">Group Projects</h4>
          <div className="row w-100 p-0 m-0">
            <Link
              target="_blank"
              to={"https://streamyes.netlify.app/"}
              className="projectItem col-6"
              style={{
                backgroundImage: `url(${moviesProject})`,
              }}
            >
              <p className="w-100 bg-dark fs-5">Movies Project</p>
            </Link>
            <Link
              target="_blank"
              to={"https://rollingmarketarg.netlify.app/"}
              className="projectItem col-6"
              style={{
                backgroundImage: `url(${marketProject})`,
              }}
            >
              <p className="w-100 bg-dark fs-5">Market Project</p>
            </Link>
          </div>
        </section>
        <section className="projectsGroup col-sm-11 my-5">
          <h4 className="fs-5 w-100">Training Projects</h4>
          <div className="row w-100 p-0 m-0">
            <Link
              target="_blank"
              to={"https://calculadoraedu.netlify.app/"}
              className="projectItem col-6"
              style={{
                backgroundImage: `url(${calculatorProject})`,
              }}
            >
              <p className="w-100 bg-dark fs-5">Calculator Project</p>
            </Link>
            <Link
              target="_blank"
              to={"https://timeredu.netlify.app/"}
              className="projectItem col-6"
              style={{
                backgroundImage: `url(${timerPorject})`,
              }}
            >
              <p className="w-100 bg-dark fs-5">Timer Project</p>
            </Link>
          </div>
        </section>
        <section className="projectsGroup col-sm-11 my-5">
          <h4 className="fs-5 w-100">Main Project</h4>
          <div className="projectItem">
            <div class="leap-frog">
              <div class="leap-frog__dot"></div>
              <div class="leap-frog__dot"></div>
              <div class="leap-frog__dot"></div>
            </div>
          </div>
        </section>
      </Container>
    </Container>
  );
}

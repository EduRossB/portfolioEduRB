import React from "react";
import { Container } from "react-bootstrap";
import myPhoto from "../img/AboutMe-myphoto.jpg";
import CarouselsEducation from "../components/CarouselsEducation";

export default function AboutMe() {
  return (
    <Container className="d-flex justify-content-center flex-wrap text-center">
      <h1 id="top" className="text-center subtitle">About Me</h1>
      <section className="d-flex row w-100 py-3 justify-content-center">
        <p className="col-sm-12 col-lg-8 px-5 textAboutMe">
          Hello, my full name is Juan Eduardo Ross Barbá, and I am a passionate
          web developer born in Tucuman, Argentina. During the pandemic, my
          curiosity for the world of web development awakened, which led me to
          pause my studies in Business Administration at the National University
          of Tucuman to begin my training in this beautiful world of
          development.
        </p>
        <img
          src={myPhoto}
          className="col-sm-8 col-lg-4 myPhoto"
          alt="personalPhoto"
        />
      </section>
      <hr />
      <section className="my-5 w-100">
        <h2 className="subtitle">Education</h2>
        <CarouselsEducation />
        <Container className="row containerEducationList">
          <ul className="col-sm-12 col-lg-6">
            <h4>WebDev</h4>
            <li>Introduction to Web Development (2020)</li>
            <li>Full Stack MERN Web Development (2021-2022)</li>
            <li>Responsive Web Design (2023)</li>
            <li>Front-end Development Libraries (2023)</li>
          </ul>
          <ul className="col-sm-12 col-lg-6">
            <h4>Others</h4>
            <li>Business Administration <strong>National University of Tucuman</strong> (2016-2019)</li>
            <li>Introduction to Digital Marketing <strong>Google</strong> (2020)</li>
            <li>Digitalize Your Business <strong>Google</strong> (2020)</li>
            <li>Workplace Communication in the 21st Century <strong>University of California</strong> (2020)</li>
          </ul>
        </Container>
      </section>
    </Container>
  );
}

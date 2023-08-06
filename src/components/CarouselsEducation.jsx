import Carousel from "react-bootstrap/Carousel";
import googleActivate from "../img/googleActivate.png";
import rollingCode from "../img/rollingCode.png";
import freeCodeCamp from "../img/freeCodeCamp.png";
import { Link } from "react-router-dom";

export default function CarouselsEducation() {
  return (
    <Carousel variant="dark" className="carouselEducation">
      <Carousel.Item>
        <div className="imgContainerCarouselEduc">
          <img
            className="imgEducationAboutMe"
            src={googleActivate}
            alt="googleActivate"
          />
        </div>
        <Carousel.Caption>
          <h3>Introduction to Web Development Course</h3>
          <p>Google Activate</p>
          <Link
            target="_blank"
            to={
              "https://www.linkedin.com/in/eduardo-ross-barb%C3%A1-1b1784152/"
            }
            className="buttonNavBar"
          >
            View More
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="imgContainerCarouselEduc">
          <img
            className="imgEducationAboutMe"
            src={rollingCode}
            alt="googleActivate"
          />
        </div>
        <Carousel.Caption>
          <h3>Full Stack MERN Web Development Course</h3>
          <p>RollingCode School</p>
          <Link
            target="_blank"
            to={
              "https://www.linkedin.com/in/eduardo-ross-barb%C3%A1-1b1784152/"
            }
            className="buttonNavBar"
          >
            View More
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="imgContainerCarouselEduc">
          <img
            className="imgEducationAboutMe"
            src={freeCodeCamp}
            alt="googleActivate"
          />
        </div>
        <Carousel.Caption>
          <h3>Responsive Web Design</h3>
          <p>freeCodeCamp</p>
          <Link
            target="_blank"
            to={
              "https://www.linkedin.com/in/eduardo-ross-barb%C3%A1-1b1784152/"
            }
            className="buttonNavBar"
          >
            View More
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="imgContainerCarouselEduc">
          <img
            className="imgEducationAboutMe"
            src={freeCodeCamp}
            alt="googleActivate"
          />
        </div>
        <Carousel.Caption>
          <h3> Front-end Development Libraries</h3>
          <p>freeCodeCamp</p>
          <Link
            target="_blank"
            to={
              "https://www.linkedin.com/in/eduardo-ross-barb%C3%A1-1b1784152/"
            }
            className="buttonNavBar"
          >
            View More
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

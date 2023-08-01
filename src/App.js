import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import Header from "./components/Header";
import MernCard from "./components/MernCard";
import logoMongo from "./img/logoMongo.png";
import logoExpress from "./img/logoExpress.png";
import logoReact from "./img/logoReact.png";
import logoNode from "./img/logoNode.png";
import developerIMG from "./img/webDeveloperDraw.png";
import { FaTools, FaChild, FaBookOpen } from "react-icons/fa";
import Footer from "./components/Footer";

function App() {
  const mernStackInfo = [
    {
      name: "Mongo DB",
      color: "#09934E ",
      image: logoMongo,
      description:
        "MongoDB is a NoSQL database that uses a flexible, document-based data model. It stores data in JSON-like documents and is designed to scale horizontally across multiple servers",
    },
    {
      name: "Express",
      color: "#F3DF1D",
      image: logoExpress,
      description:
        "Express is a minimalistic and fast web framework for Node.js. It simplifies building web applications and APIs with its flexible design and efficient features.",
    },
    {
      name: "React",
      color: "#00DDFF",
      image: logoReact,
      description:
        "React is a JavaScript library for building UI components and user interfaces. It uses a virtual DOM for efficient rendering and is widely used in modern web development.",
    },
    {
      name: "Node JS",
      color: "#91C63D",
      image: logoNode,
      description:
        "Node.js is a server-side JavaScript runtime with event-driven architecture, ideal for building scalable applications.",
    },
  ];

  return (
    <div className="App w-100">
      <Header />
      <Container className="mainContainer w-100">
        <Container className="firstPart row w-100">
          <h1 className="sayHi col-12">Hi! I'm Edu Ross Barbá</h1>
          <aside className="col-sm-12 col-md-12 col-lg-6">
            <img
              src={developerIMG}
              className="img-responsive"
              alt="developerDraw"
            />
          </aside>
          <aside className="col-sm-12 col-md-12 col-lg-6">
            <h2 className="presentationText">
              My name is Juan Eduardo Ross Bárbá. I am a web developer born in
              Argentina, with a focus on the MERN Stack and a background in the
              IT world. I am eager to embark on exciting projects and gain new
              knowledge. I am ready to take on challenges and contribute to the
              success of any project that comes my way.
            </h2>
          </aside>
        </Container>
        <hr className="py-5" />
        <div className="text-center">
          <h2 className="subtitle">Abilities</h2>
          <Container className="row justify-content-evenly">
            <div className="cardAbility col-12 col-md-3 py-3">
              <FaTools className="fs-1" />
              <h4 className="pt-3">Conflict resolution</h4>
              <hr />
              <p>
                I consider myself a person with a high ability to solve problems
                in most areas of life
              </p>
            </div>
            <div className="cardAbility col-12 col-md-3 p-3">
              <FaChild className="fs-1" />
              <h4 className="pt-3">Adaptability</h4>
              <hr />
              <p>
                I can easily adapt to new situations and environments, which
                allows me to grow, learn, and connect with people from different
                cultures
              </p>
            </div>
            <div className="cardAbility col-12 col-md-3 p-3">
              <FaBookOpen className="fs-1" />
              <h4 className="pt-3">Quick learner</h4>
              <hr />
              <p>
                Acquiring new knowledge and skills comes naturally to me, as I
                readily embrace learning opportunities with enthusiasm and a
                curious mindset.
              </p>
            </div>
          </Container>
          <button class="learn-more my-5">
            <span class="circle" aria-hidden="true">
              <span class="icon arrow"></span>
            </span>
            <span class="button-text w-100">Read More About Me</span>
          </button>
        </div>
        <hr/>
        <Container className="my-5 text-center">
          <h2 className="subtitle">Stack MERN</h2>
          <Row className="mernPart my-5 justify-content-center">
            <Col sm={10} md={6} lg={3} className="halfFirst">
              <MernCard stackInfo={mernStackInfo[0]} />
            </Col>
            <Col sm={10} md={6} lg={3} className="halfFirst">
              <MernCard stackInfo={mernStackInfo[1]} />
            </Col>
            <Col sm={10} md={6} lg={3} className="halfFirst">
              <MernCard stackInfo={mernStackInfo[2]} />
            </Col>
            <Col sm={10} md={6} lg={3} className="halfFirst">
              <MernCard stackInfo={mernStackInfo[3]} />
            </Col>
          </Row>
          <button class="learn-more stackButtonMore my-5">
            <span class="circle" aria-hidden="true">
              <span class="icon arrow"></span>
            </span>
            <span class="button-text w-100">View projects</span>
          </button>
        </Container>
      </Container>
      <Footer />
    </div>
  );
}

export default App;

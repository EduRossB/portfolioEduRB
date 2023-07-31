import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import Header from "./components/Header";
import MernCard from "./components/MernCard";
import logoMongo from './img/logoMongo.png'
import logoExpress from './img/logoExpress.png'
import logoReact from './img/logoReact.png'
import logoNode from './img/logoNode.png'

function App() {  
  console.log('Hola')
  const mernStackInfo = [
    {
      name: "Mongo DB",
      color: '#09934E ',
      image: logoMongo,
      description:
        "MongoDB is a NoSQL database that uses a flexible, document-based data model. It stores data in JSON-like documents and is designed to scale horizontally across multiple servers",
    },
    {
      name: "Express",
      color: '#F3DF1D',
      image: logoExpress,
      description:
        "Express is a minimalistic and fast web framework for Node.js. It simplifies building web applications and APIs with its flexible design and efficient features.",
    },
    {
      name: "React",
      color: '#00DDFF',
      image: logoReact,
      description:
        "React is a JavaScript library for building UI components and user interfaces. It uses a virtual DOM for efficient rendering and is widely used in modern web development.",
    },
    {
      name: "Node JS",
      color: '#91C63D',
      image: logoNode,
      description:
        "Node.js is a server-side JavaScript runtime with event-driven architecture, ideal for building scalable applications.",
    },
  ];
  return (
    <div className="App">
      <Header />
      <Container className="mainContainer">
        <Row className="firstPart my-5 justify-content-center">
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
      </Container>
    </div>
  );
}

export default App;

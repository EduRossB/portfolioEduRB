import { Container } from 'react-bootstrap';
import './App.css';
import Header from './components/Header';
import MernCard from './components/MernCard';

function App() {
  return (
    <div className="App">
      <Header />
      <Container fluid className='mainContainer'>
        <div className='firstPart my-5'>

          <aside className='halfFirst w-100'><MernCard/></aside>
        </div>
      </Container>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { Row, Col, Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Row>
        <Col xs="7">
          TEST LEFT
        </Col>
        <Col xs="3">
          TEST RIGHT
        </Col>
      </Row>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

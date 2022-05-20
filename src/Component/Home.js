import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

// Image
import Portrait from '../Image/wai_lok.png';

class Home extends Component {

  render() {
    return (
      <div className={"home"}>
        <Row>
          <Col xs="12" lg="8" className={"home-info"}>
            <div className={"title"}>{"Wai Lok Cheng"}</div>
            <div className={"sub-title"}>{"UI/UX Developer"}</div>
            <div className={"paragraph"}>
              {"Born and raised in Hong Kong.\n"}
              {"Graduated from Washington State University, USA - Bachelor of Science in Computer Science.\n"}
              {"Over 3 years of experience as a Web Application Developer specialized in front end development.\n"}
              {"Currently relocated to London, United Kingdom."}
              </div>
          </Col>
          <Col xs="12" lg="4" className={"home-portrait"}>
            <img className={"portrait"} src={Portrait} alt="portrait" />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;
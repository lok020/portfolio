import React, { Component, createRef } from 'react';
import { Row, Col } from 'react-bootstrap';

// Image
import Portrait from '../Image/wai_lok.png';

class Home extends Component {
  constructor(props) {
    super(props);
    this.fade_in = createRef();
    this.fade_watcher = new IntersectionObserver(elements => {
      elements.forEach(element => this.setState({in_view: element.isIntersecting}));
    });
    this.state = {
      in_view: false,
    };
  }

  componentDidMount = () => {
    this.fade_watcher.observe(this.fade_in.current);
  }

  componentWillUnmount = () => {
    this.fade_watcher.unobserve(this.fade_in.current);
  }

  render() {
    return (
      <div className={`home fade-in-section ${this.state.in_view ? 'in-window-view' : ''}`} ref={this.fade_in}>
        <Row>
          <Col xs="12" lg="8" className={"home-info"}>
            <div className={"title"}>{"Wai Lok Cheng"}</div>
            <div className={"sub-title"}>{"Front-end Developer"}</div>
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
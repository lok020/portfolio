import React, { Component, createRef } from 'react';
import { Row, Col } from 'react-bootstrap';

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
    this.current_year = new Date().getFullYear();
    this.past_work_experience = [4,1]
    this.current_work_experience = this.current_year - 2024;
    this.total_work_experience = this.past_work_experience.reduce((a, b) => a + b, 0) + this.current_work_experience;
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
          <Col xs="12" lg="7" className={"home-info"}>
            <div className={"greeting-title"}>{"Hello, my name is"}</div>
            <div className={"title-1"}>{"Wai Lok Cheng"}</div>
            <div className={"title-2"}>{"Software Engineer"}</div>
            <div className={"sub-title"}>{`Based in London, UK. ${this.total_work_experience}+ years of web development experience.`}</div>
          </Col>
          <Col xs="12" lg="5" className={"home-portrait"}>
            <img className={"portrait"} src={Portrait} alt="portrait" />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;
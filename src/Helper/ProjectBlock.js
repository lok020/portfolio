import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';

class ProjectBlock extends Component {
  buttonClicked = (e) => {
    const { button_link } = this.props;
    e.preventDefault();
    window.open(button_link);
  }
  
  render() {
    const { title, snapshot, description, challenge, last_update } = this.props;
    
    return (
      <Row className={"info"}>
        <Col xs="12" className={"title"}>{title}</Col>
        <Col xs="12" lg="4" className='project-snippet'>
          <img className={"snapshot"} src={snapshot} />
          <Button variant="light" className={"link-button"} onClick={this.buttonClicked}>{"Explore"}</Button>
        </Col>
        <Col xs="12" lg="8" className='project-content'>
          {description}
          <br/><br/>
          {"Significant Challenges:"}
          <br/>
          {challenge}
          <br/><br/>
          {"Last update: " + last_update}
        </Col>
      </Row>
    );
  }
}

export default ProjectBlock;

import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';

class ColOfProjectBlock extends Component {
  buttonClicked = (e) => {
    const { button_link } = this.props;
    e.preventDefault();
    window.open(button_link);
  }
  
  render() {
    const { title, snapshot } = this.props;
    
    return (
      <Col xs="12" lg="4" className={"project-block"}>
        <div className={"content"}>
          <div className={"title"}>{title}</div>
          <Row className={"gallery"}>
            <Col xs="12">
              <img className={"snapshot"} src={snapshot} />
            </Col>
          </Row>
          <Row>
            <Col xs="12" className={"link"}>
              <Button variant="light" className={"link-button"} onClick={this.buttonClicked}>{"Explore"}</Button>
            </Col>
          </Row>
        </div>
      </Col>
    );
  }
}

export default ColOfProjectBlock;

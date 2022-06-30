import React, { Component } from 'react';
import { Row, Col, Button, Modal } from 'react-bootstrap';

class ProjectBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show_modal: false,
    };
  }

  buttonClicked = (e) => {
    const { button_link } = this.props;
    e.preventDefault();
    window.open(button_link);
  }

  handleModal = () => {
    this.setState({show_modal: !this.state.show_modal});
  }
  
  render() {
    const { title, snapshot, description, challenge_n_solution, road_map, last_update } = this.props;
    
    return (
      <Col xs="12" lg="4" className={"info"}>
        <Modal show={this.state.show_modal} onHide={this.handleModal} size="xl" scrollable={true} className="modal" centered>
          <Modal.Header className='modal-header' closeVariant={"white"} closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body className='modal-body'>
            <Row>
              <Col xs="12" lg="5">
                <img className={"modal-snapshot"} src={snapshot} />
              </Col>
              <Col xs="12" lg="7" className='modal-summary'>
                <b>{description}</b>
                <Button variant="light" className={"modal-button"} onClick={this.buttonClicked}>{`Experience ${title}`}</Button>
              </Col>
            </Row>
            <br/>
            {"Significant Challenges & Solutions:"}
            {challenge_n_solution.map(cns => 
              <div key={cns} className="chanllenge-n-solution">
                {cns}
              </div>
            )}
            <br/><br/>
            {"Road Map:"}
            {road_map.map(rm => 
              <div key={rm} className="road-map">
                {rm}
              </div>
            )}
            <br/><br/>
            {"Last update: " + last_update}
          </Modal.Body>
        </Modal>
        
        <div className={"summary"} onClick={this.handleModal}>
          <div className='summary-title'>{title}</div>
          <img className={"summary-thumbnail"} src={snapshot} />
        </div>
      </Col>
    );
  }
}

export default ProjectBlock;

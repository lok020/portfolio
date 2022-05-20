import React, { Component } from 'react';
import { Row } from 'react-bootstrap';

import ColOfProjectBlock from '../Helper/ColOfProjectBlock';

class Project extends Component {

  render() {
    return (
      <div className={"project"}>
        <Row>
          <ColOfProjectBlock />
          <ColOfProjectBlock />
          <ColOfProjectBlock />
          <ColOfProjectBlock />
        </Row>
      </div>
    );
  }
}

export default Project;
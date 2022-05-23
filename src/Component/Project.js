import React, { Component } from 'react';
import { Row } from 'react-bootstrap';

import ColOfProjectBlock from '../Helper/ColOfProjectBlock';

// Image
import project_1_snapshot from '../Image/project_1.png';

class Project extends Component {

  render() {

    return (
      <div className={"project"}>
        <Row className={"info"}>
          <ColOfProjectBlock title={"Calculator"} snapshot={project_1_snapshot} button_link={"https://lok020.github.io/calculator/"}/>
        </Row>
      </div>
    );
  }
}

export default Project;
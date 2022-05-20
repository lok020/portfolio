import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class RowOfTitleAndInfo extends Component {

  render() {
    const { title, info, sub_info } = this.props;

    // no sub_info == [3,9], sub_info existed == [3,7,2]
    let row_col_spacing_xs = sub_info === undefined ? [4,8] : [4,6,2] ;
    let row_col_spacing_lg = sub_info === undefined ? [3,9] : [3,7,2] ;
    
    return (
      <Row className={"info"}>
        <Col xs={row_col_spacing_xs[0]} lg={row_col_spacing_lg[0]} id={"title"}>{title}</Col>
        <Col xs={row_col_spacing_xs[1]} lg={row_col_spacing_lg[1]} id={"info"}>{info}</Col>
        {sub_info === undefined ? <></> : <Col xs={row_col_spacing_xs[2]} lg={row_col_spacing_lg[2]} id={"sub-info"}>{sub_info}</Col>}
      </Row>
    );
  }
}

export default RowOfTitleAndInfo;

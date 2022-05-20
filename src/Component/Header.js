import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
//import moment from 'moment';

// CSS & SCSS
import '../CSS/Header.scss';

class Header extends Component {
  header_selection_list = [ "home", "about", "project", "contact" ];
  //timeloop = null;

  constructor(props) {
    super(props);
    this.state = {
      //date_time: ""
    };
  }

  // componentDidMount() {
  //   this.timeloop = this.tick_tock();
  // }

  // componentWillUnmount() {
  //   clearTimeout(this.timeloop);
  // }

  // tick_tock = () => {
  //   this.setState({date_time: moment().format("YYYY-MM-DD HH:mm:ss")});
  //   setTimeout( this.tick_tock, 100);
  // }

  HeaderSelected = (e) => {
    const { current_page, changePage } = this.props;
    let page_name = e.target.innerText;
    if (page_name !== current_page)
      changePage(page_name);
  }
  
  createHeaderSelection = (header_selection_list, current_page) => {
    let display = [];
    for(let i in header_selection_list){
      let header_selection_style = "header-tab-selection center-text-in-div ";
      if (header_selection_list[i] === current_page)
        header_selection_style += "header-tab-current-selected glow";

      display.push(
        <div key={i} className={header_selection_style} onClick={this.HeaderSelected}>
          {header_selection_list[i]}
        </div>
      );
    }
    return display;
  }

  render() {
    const { current_page } = this.props;
    return (
      <div className={"header"}>
        <Row className={"header-row"}>
          <Col xs="12" className={"header-tab"}>
              {this.createHeaderSelection(this.header_selection_list, current_page)}
          </Col>
          {/* <Col xs="3" className={"header-date-time center-text-in-div"}>{this.state.date_time}</Col> */}
        </Row>
      </div>
    );
  }
}

export default Header;

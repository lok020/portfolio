import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import '../CSS/Header.scss';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      is_dark_mode: true
    };
  }

  HeaderSelected = (e) => {
    const { changePage } = this.props;
    let page_name = e.target.innerText;
    changePage(page_name, true);
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

  handleColorModeBtn = () => {
    if (this.state.is_dark_mode){
      document.documentElement.style.setProperty('--current-color-mode-1', "var(--light-mode-1)");
      document.documentElement.style.setProperty('--current-color-mode-2', "var(--light-mode-2)");
      document.documentElement.style.setProperty('--current-color-mode-3', "var(--light-mode-3)");
      document.documentElement.style.setProperty('--current-color-mode-4', "var(--light-mode-4)");
      document.documentElement.style.setProperty('--current-color-mode-5', "var(--light-mode-5)");
    }
    else{
      document.documentElement.style.setProperty('--current-color-mode-1', "var(--dark-mode-1)");
      document.documentElement.style.setProperty('--current-color-mode-2', "var(--dark-mode-2)");
      document.documentElement.style.setProperty('--current-color-mode-3', "var(--dark-mode-3)");
      document.documentElement.style.setProperty('--current-color-mode-4', "var(--dark-mode-4)");
      document.documentElement.style.setProperty('--current-color-mode-5', "var(--dark-mode-5)");
    }
    this.setState({is_dark_mode: !this.state.is_dark_mode});
  }

  render() {
    const { current_page, header_selection_list } = this.props;
    return (
      <div className={"header"}>
        <Row className={"header-row"}>
          <Col xs="12" lg="12" className={"header-tab"}>
              <div className='color-mode-logo'>
                {this.state.is_dark_mode ?
                <div className='dark-mode'>
                  <div className='cloud'/>
                  <div className='moon'>
                    <div className='moon-cover'>

                    </div>
                  </div>
                </div>
                :
                <div className='light-mode'>
                  <div className='sun'/>
                </div>
                }
              </div>
              {this.createHeaderSelection(header_selection_list, current_page)}
              <div className='color-mode-btn' onClick={this.handleColorModeBtn}><i className={"fa fa-adjust"}/></div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;

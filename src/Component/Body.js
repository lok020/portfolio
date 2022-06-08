import React, { Component } from 'react';

import Home from './Home';
import About from './About';
import Project from './Project';
import Contact from './Contact';

// CSS & SCSS
import '../CSS/Body.scss';

class Body extends Component {
  timer = null;

  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  handleScroll = (e) => {
    if (e.target.scrollTop === 0)
      document.documentElement.style.setProperty('--header-background', "transparent");
    else if (e.target.scrollTop !== 0)
      document.documentElement.style.setProperty('--header-background', "#191919");
  }

  createBody = (current_page) => {
    let display = [];

    if (current_page === "home")
      display.push(<Home key={"home"}/>);
    else if (current_page === "about")
      display.push(<About key={"about"}/>);
    else if (current_page === "project")
      display.push(<Project key={"project"}/>);
    else if (current_page === "contact")
      display.push(<Contact key={"contact"}/>);


    return display;
  }

  render() {
    const { current_page } = this.props;
    
    return (
      <div id={"content-body"} className={"body"} onScroll={this.handleScroll}>
        {this.createBody(current_page)}
      </div>
    );
  }
}

export default Body;

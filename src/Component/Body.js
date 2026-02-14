import React, { Component, createRef } from 'react';

import Home from './Home';
import About from './About';
import Project from './Project';
import Contact from './Contact';

import '../CSS/Body.scss';

class Body extends Component {
  constructor(props) {
    super(props);
    this.home_ref = createRef();
    this.about_ref = createRef();
    this.project_ref = createRef();
    this.contact_ref = createRef();
  }

  handleScroll = (e) => {
    const { changePage } = this.props;
    if (e.target.scrollTop === 0)
      document.documentElement.style.setProperty('--header-background', "transparent");
    else if (e.target.scrollTop !== 0)
      document.documentElement.style.setProperty('--header-background', "var(--current-color-mode-1)");

    if (e.target.innerText.includes("Contact")) changePage("contact", false);
    else if (e.target.innerText.includes("Project")) changePage("project", false);
    else if (e.target.innerText.includes("About")) changePage("about", false);
    else if (e.target.innerText.includes("Good day")) changePage("home", false);
  }

  testing = () => {
    this.home_ref.current.scrollIntoView({ behavior: "smooth" });
  }

  scrollPage = () => {
    const { current_page, endScroll } = this.props;
    if (current_page === "home") this.home_ref.current.scrollIntoView({ behavior: "smooth" });
    else if (current_page === "about") this.about_ref.current.scrollIntoView({ behavior: "smooth" });
    else if (current_page === "project") this.project_ref.current.scrollIntoView({ behavior: "smooth" });
    else if (current_page === "contact") this.contact_ref.current.scrollIntoView({ behavior: "smooth" });
    endScroll();
  }

  render() {
    const { scroll_page } = this.props;
    scroll_page && this.scrollPage();

    return (
      <div id={"content-body"} className={"body"} onScroll={this.handleScroll}>
        <div ref={this.home_ref}/>
        <Home key={"home"}/>
        <div ref={this.about_ref}/>
        <About key={"about"}/>
        <div ref={this.project_ref}/>
        <Project key={"project"}/>
        <div ref={this.contact_ref}/>
        <Contact key={"contact"}/>
      </div>
    );
  }
}

export default Body;

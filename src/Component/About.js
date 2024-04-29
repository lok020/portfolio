import React, { Component, createRef } from 'react';
import { Button } from 'react-bootstrap';

import TitleBar from '../Helper/TitleBar';
import RowOfTitleAndInfo from '../Helper/RowOfTitleAndInfo';

class About extends Component {
  constructor(props) {
    super(props);
    this.fade_in = createRef();
    this.fade_watcher = new IntersectionObserver(elements => {
      elements.forEach(element => this.setState({in_view: element.isIntersecting}));
    });
    this.state = {
      in_view: false,
    };
  }

  componentDidMount = () => {
    this.fade_watcher.observe(this.fade_in.current);
  }

  componentWillUnmount = () => {
    this.fade_watcher.unobserve(this.fade_in.current);
  }

  render() {
    return (
      <div className={`about fade-in-section ${this.state.in_view ? 'in-window-view' : ''}`} ref={this.fade_in}>
        <TitleBar title="About"/>
        <div className={"title"}>{"Personal Information"}</div>
        <div className={"information-area"}>
          <RowOfTitleAndInfo title={"First Name:"} info={"Wai Lok"}/>
          <RowOfTitleAndInfo title={"Last Name:"} info={"Cheng"}/>
          <RowOfTitleAndInfo title={"Sex:"} info={"Male"}/>
          <RowOfTitleAndInfo title={"Languages:"} info={"English (Fluent), Cantonese (Native), Mandarin (Fluent)"}/>
          <RowOfTitleAndInfo title={"Current Location:"} info={"London, United Kingdom"}/>
          <RowOfTitleAndInfo title={"Nationality:"} info={"British national (overseas) / BNO"}/>
        </div>

        <div className={"title"}>{"Technical Background"}</div>
        <div className={"information-area"}>
          <RowOfTitleAndInfo title={"Languages:"} info={"JavaScript, TypeScript, Python, C, C++, C#, SQL, Java"}/>
          <RowOfTitleAndInfo title={"Library:"} info={"React"}/>
          <RowOfTitleAndInfo title={"Framework:"} info={"Next.js"}/>
          <RowOfTitleAndInfo title={"IDE:"} info={"Visual Studio Code, Eclipse"}/>
          <RowOfTitleAndInfo title={"Tools:"} info={"Git, Lighthouse, Tailwind CSS, Google Tag Manager, PhpMyAdmin, Npm, Node.js, Unity"}/>
          <RowOfTitleAndInfo title={"Npm Packages:"} info={"graphql-tag, dotenv, sanitize-html, lodash, aws-sdk, react-router-dom, react-bootstrap, amchart, material-ui"}/>
        </div>
        
        <div className={"title"}>{"Experience"}</div>
        <div className={"information-area"}>
          <RowOfTitleAndInfo title={"Dorling Kindersley Limited, United Kingdom:"}
          info={"Software Engineer"} sub_info={"November 2022 - Decemeber 2023"}/>
          <RowOfTitleAndInfo title={"Zetakey Solutions Limited, Hong Kong:"}
          info={"Web Application Developer"} sub_info={"August 2018 - April 2022"}/>
          <RowOfTitleAndInfo title={"Splendor Design & Construction Limited, Hong Kong:"}
          info={"Web Developer"} sub_info={"June 2016 - August 2016"}/>
        </div>
        
        <div className={"title"}>{"Educational"}</div>
        <div className={"information-area"}>
          <RowOfTitleAndInfo title={"University:"}
          info={"Washington State University, USA - Bachelor of Science in Computer Science"} sub_info={"December 2017"}/>
        </div>

        <br/><br/>
        <div className='resume-btn'>
          <a href={require("../PDF/resume.pdf")} download="resume_wai_lok_cheng" className='resume-btn-text'>
            {"Download Resume"}
          </a>
        </div>
      </div>
    );
  }
}

export default About;

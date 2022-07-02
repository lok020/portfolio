import React, { Component, createRef } from 'react';

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
          <RowOfTitleAndInfo title={"Hometown:"} info={"Hong Kong"}/>
          <RowOfTitleAndInfo title={"Nationality:"} info={"British national (overseas) / BNO"}/>
        </div>

        <div className={"title"}>{"Programming Information"}</div>
        <div className={"information-area"}>
          <RowOfTitleAndInfo title={"Experienced Languages:"} info={"JavaScript, HTML/CSS, C, C++, C#, SQL, Python, Java"}/>
          <RowOfTitleAndInfo title={"Experienced Tools:"} info={"React, Visual Studio Code, PhpMyAdmin, Npm, Node.js, Unity"}/>
          <RowOfTitleAndInfo title={"Experienced npm:"} info={"dotenv, aws-sdk, react-router-dom, react-bootstrap, amchart, material-ui"}/>
        </div>
        
        <div className={"title"}>{"Experience"}</div>
        <div className={"information-area"}>
          <RowOfTitleAndInfo title={"Web Application Developer:"}
          info={"Zetakey Solutions Limited, Hong Kong"} sub_info={"August 2018 - April 2022"}/>
          <RowOfTitleAndInfo title={"Web Developer:"}
          info={"Splendor Design & Construction Limited, Hong Kong"} sub_info={"June 2016 - August 2016"}/>
        </div>
        
        <div className={"title"}>{"Educational"}</div>
        <div className={"information-area"}>
          <RowOfTitleAndInfo title={"University:"}
          info={"Washington State University, USA - Bachelor of Science in Computer Science"} sub_info={"December 2017"}/>
          <RowOfTitleAndInfo title={"Community College:"}
          info={"Everett Community College, USA - Associate in Arts and Sciences"} sub_info={"March 2013"}/>
        </div>
      </div>
    );
  }
}

export default About;

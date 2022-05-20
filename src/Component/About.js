import React, { Component } from 'react';

import RowOfTitleAndInfo from '../Helper/RowOfTitleAndInfo';

class About extends Component {

  render() {
    return (
      <div className={"about"}>
        <div className={"title"}>{"Personal Information"}</div>
        <RowOfTitleAndInfo title={"First Name:"} info={"Wai Lok"}/>
        <RowOfTitleAndInfo title={"Last Name:"} info={"Cheng"}/>
        <RowOfTitleAndInfo title={"Languages:"} info={"English (Excellent), Cantonese (Fluent), Mandarin (Excellent)"}/>
        <RowOfTitleAndInfo title={"Programming Languages:"} info={"JavaScript, C, C++, C#"}/>
        <RowOfTitleAndInfo title={"Experienced Library:"} info={"React"}/>
        
        <div className={"title"}>{"Educational Background"}</div>
        <RowOfTitleAndInfo title={"Community College:"}
        info={"Everett Community College, USA - Associate in Arts and Sciences"} sub_info={"March 2013"}/>
        <RowOfTitleAndInfo title={"University:"}
        info={"Washington State University, USA - Bachelor of Science in Computer Science"} sub_info={"December 2017"}/>
        
        <div className={"title"}>{"Work Experience"}</div>
        <RowOfTitleAndInfo title={"Basic Web developer:"}
        info={"Splendor Design & Construction Limited, Hong Kong"} sub_info={"June 2016 - August 2016"}/>
        <RowOfTitleAndInfo title={"Web Application Developer:"}
        info={"Zetakey Solutions Limited, Hong Kong"} sub_info={"August 2018 - April 2022"}/>
      </div>
    );
  }
}

export default About;

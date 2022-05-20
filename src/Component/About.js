import React, { Component } from 'react';

import RowOfTitleAndInfo from '../Helper/RowOfTitleAndInfo';

class About extends Component {

  render() {
    return (
      <div className={"about"}>
        <div className={"title"}>{"Personal Information"}</div>
        <div className={"information-area"}>
          <RowOfTitleAndInfo title={"First Name:"} info={"Wai Lok"}/>
          <RowOfTitleAndInfo title={"Last Name:"} info={"Cheng"}/>
          <RowOfTitleAndInfo title={"Sex:"} info={"Male"}/>
          <RowOfTitleAndInfo title={"Languages:"} info={"English (Fluent), Cantonese (Native), Mandarin (Fluent)"}/>
          <RowOfTitleAndInfo title={"Hometown:"} info={"Hong Kong"}/>
        </div>

        <div className={"title"}>{"Programming Information"}</div>
        <div className={"information-area"}>
          <RowOfTitleAndInfo title={"Programming Languages:"} info={"JavaScript, HTML/CSS, C, C++, C#, SQL"}/>
          <RowOfTitleAndInfo title={"Experienced Tools:"} info={"React, Visual Studio Code, PhpMyAdmin, Npm, Node.js, Unity"}/>
        </div>
        
        <div className={"title"}>{"Experience"}</div>
        <div className={"information-area"}>
          <RowOfTitleAndInfo title={"Web Application Developer:"}
          info={"Zetakey Solutions Limited, Hong Kong"} sub_info={"August 2018 - April 2022"}/>
          <RowOfTitleAndInfo title={"Web developer:"}
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

import React, { Component } from 'react';
import { Row } from 'react-bootstrap';

import ProjectBlock from '../Helper/ProjectBlock';

// Image
import project_1_snapshot from '../Image/project_1.png';
import project_2_snapshot from '../Image/project_2.png';

class Project extends Component {

  render() {

    return (
      <div className={"project"}>
        <ProjectBlock
          title={"Calculator"}
          snapshot={project_1_snapshot}
          description={"Calculator made using HTML, CSS, and javascript. Capable of performing the four arithmetic operations of addition, subtraction, multiplication, and division. Besides the typical numeric buttons and arithmetic buttons, the page also contains other functional buttons such as percentages, clear, backspace, equal, and decimal."}
          challenge={"1. The representation of multiplication, and division in the sense of how the general public portrays is different than the programming language. The calculator page is designed for use by everyone, in school. The way to solve this is when the equal button is being pressed, I will take the whole equation and transform all multiplication and division from the general representation into the programming representation by using the replace function.\n"+
                     "2. The decimal restriction in every string of numbers. Adding a dot between numbers is easy, but in mathematics in every string of numbers, there can only exist one dot, and every string of numbers behind that dot is considered decimal. Also, have to consider in the whole equation there can be more than one string of numbers. The solution is to check when the dot button is being pressed. separate all operators and the string of numbers from the equation, then get the last string of numbers and check for the dot existence. If the dot is not existing, then simply add one, otherwise, ignore it.\n"+
                     "3. The percentage does not work in the evaluate function. When the equation includes percentages being evaluated, often it would not return the correct answer. The simple solution is when the user press the equal button, locates all string of numbers attached to the percentage, removes the percentage sign, and manually multiplies the string of numbers by 0.01(the definition of percentage)."}
          last_update={"23rd May 2022"}
          button_link={"https://lok020.github.io/calculator/"}/>
          <ProjectBlock
            title={"Weather"}
            snapshot={project_2_snapshot}
            description={"Weather made using HTML, CSS, javascript, React, OpenWeather API, and google material icons. Capable of displaying current weather, temperature, date, time, humidity, pressure, visibility, sunrise, sunset, cloudiness, wind, rain, and snow by the selected city."}
            challenge={"1. Compare to Font Awesome (FA), Google material icon selection is limited. In this project, I use google material icons to display all the icons on the page. I worked with FA in the past and decided to work with Google material icon this time. The solution is to pick the closest-looking icons to represent the weather condition although they are not designed for it. For example, I use the no WIFI signal icon to represent the pressure weather condition because out of all the icons, that is the closest one can represent it.\n"+
                       "2. UI design is subjective. However, there is still guideline to follow. For instance, modern design tends to be leaning toward minimal design and rounded corners. The solution is to utilize spacing to construct a modern design as my based. Adding modern elements such as rounded corners, muted color, icon representation, and the minimal words used. Give users a comfortable UX experience, and a pleasant UI design to look at.\n"+
                       "3. Information censorship on Github. With the use of an OpenWeather private API key, any code put online can be sensitive. Especially when I host the website on Github, and store my source code on their server. The solution to this problem is using an environment variable (dotenv) to contain all the sensitive information, such as the private API key. Combining the use of gitignore file, I can exclude my custom dotenv file that contains my private information from exposing it to anyone browsing my source code."}
            last_update={"7th June 2022"}
            button_link={"https://lok020.github.io/weather/"}/>
      </div>
    );
  }
}

export default Project;


/*
There are several significant challenges for this project.\n1. The representation of multiplication, and division in the sense of how the general public portrays is different than the programming language. The calculator page is designed for use by everyone, therefore the representation for multiplication and division is displayed as the way we all learned in school. The way to solve this is when the equal button is being pressed, I will take the whole equation and transform all multiplication and division from the general representation into the programming representation by using the replace function.




*/
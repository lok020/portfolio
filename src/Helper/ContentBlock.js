import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class ContentBlock extends Component {
  buttonClicked = (e) => {
    const { button_link } = this.props;
    e.preventDefault();
    window.open(button_link);
  }

  render() {
    const { social_media, icon, message, button_message } = this.props;

    
    return (
      <div className={"content-block " + social_media}>
        <div className={"image"}>
          <i className={icon}/>
        </div>
        <div className={"content"}>
          <div className={"message"}>{message}</div>
          <div className={"button"}>
            <Button className={"button-message"} onClick={this.buttonClicked}>{button_message}</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default ContentBlock;

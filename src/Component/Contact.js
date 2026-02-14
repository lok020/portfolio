import React, { Component, createRef } from 'react';

import TitleBar from '../Helper/TitleBar';
import ContentBlock from '../Helper/ContentBlock';

class Contact extends Component {
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
      <div className={`contact fade-in-section ${this.state.in_view ? 'in-window-view' : ''}`} ref={this.fade_in}>
        <TitleBar title="Contact"/>
        <div className={"info"}>
          <ContentBlock
            social_media={"linkedin"}
            icon={"fa fa-linkedin"}
            message={"Get connected."}
            button_message={"Linkedin - lok020"}
            button_link={"https://www.linkedin.com/in/lok020/"}
          />
          <ContentBlock
            social_media={"github"}
            icon={"fa fa-github"}
            message={"Stay updated."}
            button_message={"Github - lok020"}
            button_link={"https://github.com/lok020"}
          />
          {/* <ContentBlock
            social_media={"whatsapp"}
            icon={"fa fa-whatsapp"}
            message={"Let's have a chat."}
            button_message={"Whatsapp"}
            button_link={"https://www.linkedin.com/in/lok020/"}
          /> */}
          <ContentBlock
            social_media={"email"}
            icon={"fa fa-envelope"}
            message={"Send me an email."}
            button_message={"wailokcheng020@gmail.com"}
            button_link={"mailto:wailokcheng020@gmail.com"}
          />
        </div>
        <div className={"title"}>{"Current Location"}</div>
        <div className={"map"}>
          <iframe
            title='current-location-map'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d635085.5865379199!2d-0.678945703528549!3d51.55350994711981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b0577dabcdf%3A0x1c1ecc71d35ab732!2sLondon%20N7!5e0!3m2!1sen!2suk!4v1652605078759!5m2!1sen!2suk"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    );
  }
}

export default Contact;

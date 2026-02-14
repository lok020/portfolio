import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Component/Header';

import Body from './Component/Body';

import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/Portfolio.scss';

import '../node_modules/font-awesome/css/font-awesome.min.css';

class Portfolio extends React.Component {
  header_selection_list = [ "home", "about", "project", "contact" ];

  constructor(props) {
    super(props);
    this.state = {
      current_page: "home",
      scroll_page: false
    }
  }
  
  changePage = (page_name, is_scroll) => {
    this.setState({current_page: page_name});
    is_scroll && this.setState({scroll_page: true});

  }

  endScroll = () => {
    this.setState({scroll_page: false});
  }

  render() {
    return (
      <div className={"portfolio"}>
        <Header current_page={this.state.current_page} changePage={this.changePage}
                header_selection_list={this.header_selection_list}/>
        <Body current_page={this.state.current_page} changePage={this.changePage}
              scroll_page={this.state.scroll_page} endScroll={this.endScroll}/>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<Portfolio />, rootElement);

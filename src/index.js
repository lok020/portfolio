import React from 'react';
import ReactDOM from 'react-dom';
//import reportWebVitals from './reportWebVitals';

// Header
import Header from './Component/Header';

// Body
import Body from './Component/Body';

// CSS & SCSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/Portfolio.scss';

// packages CSS
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




























// var current_page = "Profile";

// function changePage (page_name) {
//   current_page = page_name;
//   console.log(current_page);
// }

// ReactDOM.render(
//   <React.StrictMode>
//     <Header />
//     <Sidebar current_page={current_page} changePage={changePage}/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals(console.log);

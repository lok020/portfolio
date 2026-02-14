import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

import '../CSS/Login.scss';


class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      color_theme: "Dark Mode"
    };
  }

  setColorTheme = (e) => {
    this.setState({ color_theme: e.currentTarget.value});
  }

  render() {
    console.log(this.state.color_theme);
    return (
      <div className={"login"}>
        <div className={"login-box"}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>

        <div className={"color-theme"}>
          <Form.Select onChange={this.setColorTheme}>
            <option>Dark Mode</option>
            <option>Light Mode</option>
          </Form.Select>
        </div>
      </div>
    );
  }
}

export default Login;

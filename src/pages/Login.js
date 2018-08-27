import React, { Component } from 'react';
import {TextField, Card, Button} from '@material-ui/core';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      token: ''
    }
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleSubmit = () => {
    fetch('http://localhost:8000/login', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password        
      })
    })
    .then(response => response.json())
    .then(response => {
      console.log(response);
    })
  }

  render() {
    return(
      <div className="text-center with-padding-top-30">
        <Card>
          <h1>Log In</h1>
          <div className="with-padding-bottom-30">
            <TextField
              name="email"
              label="Email"
              onChange={this.handleChange("email")}
            />
            <br />
            <br />
            <TextField 
              name="password"
              label="Password"
              type="password"
              onChange={this.handleChange("password")}
            />
            <br />
            <br />
            <Button color="primary" onClick={this.handleSubmit}>Submit</Button>
          </div>
        </Card>
      </div>
    )
  }
}

export {Login};
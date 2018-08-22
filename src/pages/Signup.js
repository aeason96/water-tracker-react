import React, { Component } from 'react';
import {TextField, Card, Button} from '@material-ui/core';

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      repeatPassword: ''
    }
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleSubmit = () => {
    fetch('http://localhost:8000/users', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          email: this.state.email,
          password: this.state.password
        }
        
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
          <h1>Create Account</h1>
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
            <TextField
              name="repeatPassword"
              label="Repeat Password"
              type="password"
              onChange={this.handleChange("repeatPassword")}
            />
            <br />
            <br />
            <Button color="primary" onClick={this.handleSubmit}>Create</Button>
          </div>
        </Card>
      </div>
    )
  }
}

export {Signup};
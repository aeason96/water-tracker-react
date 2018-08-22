import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      message: 'Waiting for response from rails...'
    }
  }

  componentDidMount() {
    fetch("http://localhost:8000/hello-world")
      .then(response => response.json())
      .then(response => {
        this.setState({
          message: response.message
        })
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {this.state.message}
        </p>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
              React on github-pages, looks easy and great.
          </p>
          <a
            className="App-link"
            href="https://rajeevkannav.com/hello-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hello there, I am Rajeev Sharma, just started reacting...
          </a>
        </header>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Snake from './Snake.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App--Title">SNEK</div>
        <div>The arcade classic!</div>
        <div>Press SPACE to start</div>
        <br/>
        <Snake/>
      </div>
    );
  }
}

export default App;

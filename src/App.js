import React, { Component } from 'react';
import Snake from './Snake.js';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      score: 0,
      highscore: 0,
      wrap: true,
      speed: "normal",
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App--Title">SNEK</div>
        <div>The arcade classic!</div>
        <div>Press SPACE to start</div>
        <br/>

        <Snake wrap={this.state.wrap}/>
      </div>
    );
  }
}

export default App;

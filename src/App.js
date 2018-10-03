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

  addPoints = (points) => {
    let score = this.state.score;
    score += points;
    this.setState({score})
  }

  render() {
    return (
      <div className="App">
        <div className="App--Title">SNEK</div>
        <div>The arcade classic!</div>
        <div>Press SPACE to start</div>
        <div>SCORE: {this.state.score}</div>
        <br/>

        <Snake wrap={this.state.wrap} score={this.state.score} addPoints={this.addPoints}/>
      </div>
    );
  }
}

export default App;

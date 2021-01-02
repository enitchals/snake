import React, { Component } from 'react';
import Snake from './Snake.js';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      score: 0,
      highscore: 0,
      gridSize: 20,
      wrap: true,
      speed: 5, // lower number = faster
      party: false
    }
  }

  addPoints = (points) => {
    let score = this.state.score;
    score += points;
    this.setState({score})
  }
  
  toggleWalls = () => {
    this.setState({wrap: !this.state.wrap})
  }

  toggleParty = () => {
    this.setState({party: !this.state.party})
  }

  render() {
    return (
      <div className="App">
        <div className="Header">
          <div className="Header--Section">
            <div className="App--Title">SNAKE</div>
            <div>press</div>
            <b>SPACE</b>
            <div>to start</div>
          </div>
          <div className="Header--Section">
            <div className="Header--Label">SCORE:</div>
            <div className="App-Score">{this.state.score}</div>
          </div>
          <div className="Header--Section">
            <div className="Header--Label">GRID:</div>
            <input id="speed" type="number" value={this.state.gridSize} min="10" max="100" step="5" onChange={e => this.setState({gridSize: e.target.value})}/>
          </div>
          <div className="Header--Section">
            <div className="Header--Label">SPEED:</div>
            <input id="speed" type="number" value={this.state.speed} min="1" max="10" onChange={e => this.setState({speed: e.target.value})}/>
          </div>
          <div className="Header--Section">
            <div className="Header--Label">WALLS:</div>
            <label class="switch">
            <input type="checkbox" onChange={this.toggleWalls}/>
            <span class="slider round">
            </span>
            </label>
          </div>
          {/* <div className="Header--Section">
            <div className="Header--Label">PARTY?</div>
            <label class="switch">
            <input type="checkbox" onChange={this.toggleParty}/>
            <span class="slider round">
            </span>
            </label>
          </div> */}
        </div>
        
        <br/>

        <Snake wrap={this.state.wrap} score={this.state.score} addPoints={this.addPoints} speed={(11-this.state.speed) * 50} gridSize={this.state.gridSize}/>
      </div>
    );
  }
}

export default App;

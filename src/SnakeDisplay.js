import React, { Component } from 'react';
import Cell from './Cell.js';
import './App.css';

class SnakeDisplay extends Component {
  
    componentDidMount() {
        this.focus();
    }
  render() {
    return (
      <div className="Snake">
        {this.props.matrix.map((row) => (
            row.map((cell) => (
                <Cell value={cell}/>
            ))
        ))}
      </div>
    );
  }
}

export default SnakeDisplay;
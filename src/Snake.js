import React, { Component } from 'react';
import {start} from './start.js';
import Cell from './Cell.js';
import './App.css';

class Snake extends Component {
    constructor(){
        super();
        this.state = {
            gridSize: start[0].length-1,
            go: false,
            matrix: start,
            direction: "down",
            headY: 1,
            headX: 9,
            tailY: 0,
            tailX: 9,
            timer: null,
        }
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.move = this.move.bind(this);
    }
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyPress)
    }

    go(timer){
        this.setState({go: true});
        this.setState({timer: setInterval(() => this.move(), 500)});
    }

    gameOver(){
        clearInterval(this.state.timer)
        window.alert("Game Over!")
    }

    move(){
        let headX = this.state.headX;
        let headY = this.state.headY;
        let tailX = this.state.tailX;
        let tailY = this.state.tailY;

        let matrix = this.state.matrix;

        //remove previous tail
        matrix[tailY][tailX] = 0;

        //change values for head and tail
        switch(this.state.direction){
            case 'down':
                console.log(this.state.gridSize);
                headY++;
                if (matrix[headY][headX] == 1) this.gameOver();
                break;
            case 'up':
                headY--;
                if (matrix[headY][headX] == 1) this.gameOver();
                break;
            case 'right':
                headX++;
                if (matrix[headY][headX] == 1) this.gameOver();
                break;
            case 'left':
                headX--;
                if (matrix[headY][headX] == 1) this.gameOver();
                break;
        }
        //add new head
        matrix[headY][headX] = 1;
        this.setState({headX, headY, tailX, tailY, matrix})
    }

    updateBody() {
    }

    handleKeyPress = (e) => {
        let direction = this.state.direction;
        switch(e.keyCode){
            case 32:
                this.go(this.state.timer);
                break;
            case 40:
                direction = 'down';
                break;
            case 38:
                direction = 'up';
                break;
            case 39:
                direction = 'right';
                break;
            case 37:
                direction = 'left';
                break;
        }
        this.setState({direction});
    }

    render() {
        return (
            <div className="Snake">
            {this.state.matrix.map((row) => (
                row.map((cell) => (
                    <Cell value={cell}/>
                ))
            ))}
        </div>
        );
    }
}

export default Snake;

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
            ate: false,
            matrix: start,
            direction: "down",
            headY: 1,
            headX: 9,
            positions: [[1,9], [0,9]],
            timer: null,
        }
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.move = this.move.bind(this);
        this.placeApple = this.placeApple.bind(this);
    }
    componentDidMount() {
        this.placeApple();
        window.addEventListener('keydown', this.handleKeyPress)
    }

    go(){
        this.setState({go: true});
        this.setState({timer: setInterval(() => this.move(), 200)});
    }

    gameOver(){
        clearInterval(this.state.timer);
        window.alert("Game Over!");
    }

    placeApple() {
        let randX;
        let randY;
        let matrix = this.state.matrix;
        const randomize = () => {
            randX = Math.round(Math.random()*this.state.gridSize);
            randY = Math.round(Math.random()*this.state.gridSize);
        }
        randomize();
        if (matrix[randY][randX] == 0) {matrix[randY][randX] = 2} else randomize();
        this.setState({matrix});
    }

    move(){
        let headX = this.state.headX;
        let headY = this.state.headY;
        let positions = this.state.positions;
        let matrix = this.state.matrix;
        let ate = false;

        //change values for head
        switch(this.state.direction){
            case 'down':
                headY++;
                if (headY > this.state.gridSize) headY = 0; 
                if (matrix[headY][headX] == 1) this.gameOver();
                break;
            case 'up':
                headY--;
                if (headY < 0) headY = this.state.gridSize;
                if (matrix[headY][headX] == 1) this.gameOver();
                break;
            case 'right':
                headX++;
                if (headX > this.state.gridSize) headX = 0;
                if (matrix[headY][headX] == 1) this.gameOver();
                break;
            case 'left':
                headX--;
                if (headX < 0) headX = this.state.gridSize;
                if (matrix[headY][headX] == 1) this.gameOver();
                break;
        }

        //check if snake has eaten
        if (matrix[headY][headX] == 2) {
            ate = true;
            this.placeApple();
        }
        //remove previous tail
        let tailY = positions[positions.length-1][0];
        let tailX = positions[positions.length-1][1];
        if (!ate){
            matrix[tailY][tailX] = 0;
            positions.pop();
        }
                
        //add new head
        matrix[headY][headX] = 1;
        positions.unshift([headY, headX]);
        this.setState({headX, headY, tailX, tailY, matrix, positions});
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
            case 83:
                direction = 'down';
                break;
            case 38:
                direction = 'up';
                break;
            case 87:
                direction = 'up';
                break;
            case 39:
                direction = 'right';
                break;
            case 68:
                direction = 'right';
                break;
            case 37:
                direction = 'left';
                break;
            case 65:
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

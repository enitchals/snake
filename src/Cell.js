import React, { Component } from 'react';
import './App.css';

class Cell extends Component {
    render() {
        let type;
        if (this.props.value == 0) type="EmptyCell";
        if (this.props.value == 1) type="SnakeCell";
        if (this.props.value == 2) type="AppleCell";
        return (
            <div className={type}>
            </div>
        );
    }
}

export default Cell;

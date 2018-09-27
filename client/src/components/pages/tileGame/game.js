import React, { Component } from 'react';

import Board from './board';
import Square from './square';
// we don't need this because we're going to include this in App
// import './Assets/css/default.min.css';

class Game extends Component {

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}
export default Game;

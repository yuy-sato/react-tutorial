import React, { useState } from 'react';
import MoveList from './MoveList.js'
import Board from './Board.js'
import CalculateWinner from '../lib/CalculateWinner.js'

const Game = () => {
  const [history, setHistory] = useState([{squares: Array(9).fill(null)}]);
  const [xIsNext, setXIsNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);

  const current = history[stepNumber];
  const winner = CalculateWinner(current.squares);


  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  const handleClick = (i) => {
    const historyClone = history.slice(0, stepNumber + 1);
    const squaresClone = current.squares.slice();
    if (winner || squaresClone[i]) {
      return;
    }

    squaresClone[i] = xIsNext ? 'X' : 'O';
    setHistory([
      ...historyClone, {squares: squaresClone}
    ]);
    setStepNumber(historyClone.length);
    setXIsNext(!xIsNext);
  }

  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={(i) => handleClick(i)} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <MoveList history={history} onClick={jumpTo} />
      </div>
    </div>
  );
}

export default Game;
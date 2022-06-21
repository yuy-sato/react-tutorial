import MoveList from "./MoveList.js";
import Board from "./Board.js";
import calculateWinner from "../lib/calculateWinner.js";
import { useDispatch, useSelector } from "react-redux";
import { selectSquare } from "../actions/historyActions";
import { updateStepNumber } from "../actions/stepNumberActions";
import { updateXIsNext } from "../actions/xIsNextActions";

const Game = () => {
  const dispatch = useDispatch();
  const history = useSelector((state) => state.history);
  const stepNumber = useSelector((state) => state.stepNumber);
  const xIsNext = useSelector((state) => state.xIsNext);

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${xIsNext ? "X" : "O"}`;
  }

  const handleClick = (i) => {
    const historyClone = history.slice(0, stepNumber + 1);
    const squaresClone = current.squares.slice();
    if (winner || squaresClone[i]) {
      return;
    }

    dispatch(selectSquare(xIsNext ? "X" : "O", i, stepNumber));
    dispatch(updateStepNumber(historyClone.length));
    dispatch(updateXIsNext(!xIsNext));
  };

  const jumpTo = (step) => {
    dispatch(updateStepNumber(step));
    dispatch(updateXIsNext(step % 2 === 0));
  };

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
};

export default Game;

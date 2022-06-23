import { MoveList } from "./MoveList.js";
import { Board } from "./Board.js";
import { connect } from "react-redux";
import { selectSquare } from "../actions/historyActions";
import { updateStepNumber } from "../actions/stepNumberActions";
import { updateXIsNext } from "../actions/xIsNextActions";
import { calculateWinner } from "../lib/calculateWinner.js";

import { withLog } from "../lib/withLog";
import { Message } from "../components/Message";

const Game = ({
  history,
  stepNumber,
  xIsNext,
  selectSquare,
  updateStepNumber,
  updateXIsNext,
}) => {
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

    selectSquare(xIsNext ? "X" : "O", i, stepNumber);
    updateStepNumber(historyClone.length);
    updateXIsNext(!xIsNext);
  };

  const jumpTo = (step) => {
    updateStepNumber(step);
    updateXIsNext(step % 2 === 0);
  };

  const Hoge = withLog("Hello")(Message);

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={(i) => handleClick(i)} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <MoveList history={history} onClick={jumpTo} />
      </div>
      <Hoge />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    history: state.history,
    stepNumber: state.stepNumber,
    xIsNext: state.xIsNext,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectSquare: (player, index, stepNumber) =>
      dispatch(selectSquare(player, index, stepNumber)),
    updateStepNumber: (step) => dispatch(updateStepNumber(step)),
    updateXIsNext: (xIsNext) => dispatch(updateXIsNext(xIsNext)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);

export const MoveList = (props) => {
  return (
    <ol>
      {props.history.map((_, move) => {
        const desc = move ? `Go to move #${move}` : "Go to game start";

        return (
          <li key={move}>
            <button onClick={() => props.onClick(move)}>{desc}</button>
          </li>
        );
      })}
    </ol>
  );
};

const initialState = [{squares: Array(9).fill(null)}];

export const historyReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_SQUARE':
      const historyClone = state.slice(0, action.payload.stepNumber + 1);
      const current = historyClone[action.payload.stepNumber];
      const squaresClone = current.squares.slice();
      squaresClone[action.payload.index] = action.payload.player;

      return [...historyClone, {squares: squaresClone}];

    default:
      return state;
  }
}
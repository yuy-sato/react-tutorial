export const selectSquare = (player, index, stepNumber) => {
  return {
    type: 'SELECT_SQUARE',
    payload: {
      player,
      index,
      stepNumber,
    },
  };
}
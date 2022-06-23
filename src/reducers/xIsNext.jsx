const initialState = true;

export const xIsNextReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_X_IS_NEXT':
      return action.payload.xIsNext;

    default:
      return state;
  }
};

const initialState = 0;

export const stepNumberReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_STEP_NUMBER':
      return action.payload.step;

    default:
      return state;
  }
}
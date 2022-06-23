export const updateStepNumber = (step) => {
  return {
    type: 'UPDATE_STEP_NUMBER',
    payload: {
      step,
    },
  };
};

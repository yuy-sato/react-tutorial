import { combineReducers } from "redux";
import { historyReducer } from './history';
import { stepNumberReducer } from './stepNumber';
import { xIsNextReducer } from './xIsNext';

export const reducers = combineReducers({
  history: historyReducer,
  stepNumber: stepNumberReducer,
  xIsNext: xIsNextReducer,
});

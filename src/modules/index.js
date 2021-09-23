import { combineReducers } from 'redux';
import answer from './answer';
import questions from './questions';
import result from './result';

const rootReducer = combineReducers({
  answer,
  questions,
  result,
});

export default rootReducer;
import { combineReducers } from 'redux';
import answer from './answer';
import questions from './questions';
import result from './result';
import loading from './loading';

const rootReducer = combineReducers({
  answer,
  questions,
  result,
  loading,
});

export default rootReducer;
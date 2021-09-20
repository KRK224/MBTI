import { combineReducers } from 'redux';
import answer from './answer';
import questions from './questions';

const rootReducer = combineReducers({
  answer,
  questions,
});

export default rootReducer;
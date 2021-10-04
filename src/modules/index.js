import { combineReducers } from 'redux';
import answer from './answer';
import questions from './questions';
import result from './result';
import loading from './loading';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  answer,
  questions,
  result,
  loading,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
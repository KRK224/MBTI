import { combineReducers } from 'redux';
import answer from './answer';
import questions from './questions';
import result from './result';
import loading from './loading';
import storageSession from 'redux-persist/lib/storage/session';
import { persistReducer } from 'redux-persist';


const persistConfig = {
  key: 'root',
  storage: storageSession,
};

const rootReducer = combineReducers({
  answer,
  questions,
  result,
  loading,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
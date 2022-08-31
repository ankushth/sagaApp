import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './mySaga'
import Reducer from './AllReducers/Index'

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  Reducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga)
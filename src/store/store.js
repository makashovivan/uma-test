import { configureStore } from '@reduxjs/toolkit';
import { enableMapSet } from 'immer';
import createSagaMiddleware from 'redux-saga'
import userInfoReducer from './reducers/userInfoSlice';
import fashionsReducer from './reducers/fashionsSlice';
import rootSaga from './rootSaga';

enableMapSet();
const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    userInfo: userInfoReducer,
    fashions: fashionsReducer,
  },
  middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);

import { all } from 'redux-saga/effects';
import userDataWatcher from './sagas/userInfoSaga';
import fashionsDataWatcher from './sagas/fashionsSaga';

export default function* mainSaga() {
  yield all([
      userDataWatcher(),
      fashionsDataWatcher(),
  ])
};

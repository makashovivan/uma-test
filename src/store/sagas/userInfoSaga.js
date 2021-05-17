import { put, select, takeEvery, call } from 'redux-saga/effects'
import { message } from 'antd';
import {
  setUserInfo,
  getUserData,
  selectMnem
} from '../reducers/userInfoSlice';

const fetchUserData = async (mnem) => await fetch(`https://looks.umastyle.club/custapi/allrest/fashion/publicuser?mnem=${mnem}`);

function* getUserDataWorker() {
  try {
    const mnem = yield select(selectMnem);
    const res = yield call(() => fetchUserData(mnem));
    const { photoUrl, mysite, phone, email } = yield call(() => res.json())
    yield put(setUserInfo({photoUrl, mysite, phone, email}));
  } catch(e) {
    message.error('Ошибка сети');
  }
};

export default function* userDataWatcher() {
  yield takeEvery(getUserData().type, getUserDataWorker);
};

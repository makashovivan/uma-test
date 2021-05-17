import { put, select, takeEvery, call, all } from 'redux-saga/effects';
import { message } from 'antd';
import {
  addFashionsList,
  addProductsList,
  getFashionsData,
  getProductsData,
  selectClassId,
  setIsLoading,
  setPagesCount,
} from '../reducers/fashionsSlice';
import { selectMnem } from '../reducers/userInfoSlice';

const fetchFashionsList = (mnem, page, classId) =>
  fetch(`https://looks.umastyle.club/custapi/allrest/fashion/listfilteredfashion?styleUserMnem=${mnem}&page=${page}&classId=${classId}`);

const fetchFashionProd = (fashionId) =>
  fetch(`https://looks.umastyle.club/custapi/allrest/fashion/listfashionprod?fashionId=${fashionId}`);

const getFileUrl = (fileId) => `https://looks.umastyle.club/custapi/allrest/file/getimage/${fileId}`;

function* getFashionsDataWorker(action) {
  try {
    const mnem = yield select(selectMnem);
    const classId = yield select(selectClassId);
    yield put(setIsLoading(true));
    const res = yield call(() => fetchFashionsList(mnem, action.payload, classId));
    const data = yield call(() => res.json());
    const fashionsList = data.list.map(fashion => {
      return {
        fashionId: fashion.id,
        pictUrl: fashion.collagePictId
          ? getFileUrl(fashion.collagePictId)
          : fashion.collagePictUrl
      }
    });
    yield put(addFashionsList(fashionsList));
    yield put(setPagesCount(data.totalPages));
  } catch(e) {
    message.error('Ошибка сети');
  } finally {
    yield put(setIsLoading(false));
  }
};

function* getProductsDataWorker(action) {
  try {
    const res = yield call(() => fetchFashionProd(action.payload));
    const data = yield call(() => res.json());
    yield put(addProductsList({
      fashionId: action.payload,
      productsList: data.list
    }));
  } catch(e) {
    console.error(e);
  }
};

export default function* fashionsDataWatcher() {
  yield all([
    takeEvery(getFashionsData().type, getFashionsDataWorker),
    takeEvery(getProductsData().type, getProductsDataWorker),
  ])
};

import * as types from "../action";
import { takeEvery, takeLatest } from "redux-saga/effects";
import { getBLogListSaga } from "./blogs";

function* mySaga() {
  yield takeEvery(types.GET_BLOG_LIST, getBLogListSaga);
}

export default mySaga;

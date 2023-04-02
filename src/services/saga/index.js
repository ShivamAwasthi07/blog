import * as types from "../action";
import { takeEvery, takeLatest } from "redux-saga/effects";
import {
  deleteBlogSaga,
  getBLogListSaga,
  getOneBlogSaga,
  postBlogSaga,
  updateBlogSaga,
} from "./blogs";

function* mySaga() {
  yield takeEvery(types.GET_BLOG_LIST, getBLogListSaga);
  yield takeEvery(types.GET_ONE_BLOG, getOneBlogSaga);
  yield takeEvery(types.POST_BLOG, postBlogSaga);
  yield takeEvery(types.UPDATE_BLOG, updateBlogSaga);
  yield takeEvery(types.DELETE_BLOG, deleteBlogSaga);
}

export default mySaga;

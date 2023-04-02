import { put, call } from "redux-saga/effects";
import * as types from "../../action";
import { toastMessage } from "../../../components/toast";
import {
  deleteBlogApi,
  getBlogListApi,
  getOneBlogApi,
  postBlogApi,
} from "../../api";

export function* getBLogListSaga() {
  console.log("list saga");
  try {
    yield put({ type: types.GET_BLOG_LIST_START });
    const response = yield call(getBlogListApi);
    if (response.data.statusMessage === "FAIL") {
      yield put({ type: types.GET_BLOG_LIST_FAIL });
      toastMessage.error(response.data.message);
    } else {
      yield put({
        type: types.GET_BLOG_LIST_SUCCESS,
        data: response?.data,
      });
    }
  } catch (error) {
    yield put({ type: types.GET_BLOG_LIST_FAIL });
  }
}

export function* getOneBlogSaga({ data }) {
  console.log("blog saga");
  try {
    yield put({ type: types.GET_ONE_BLOG_START });
    const response = yield call(getOneBlogApi, data);
    if (response.data.statusMessage === "FAIL") {
      yield put({ type: types.GET_ONE_BLOG_FAIL });
      toastMessage.error(response.data.message);
    } else {
      yield put({
        type: types.GET_ONE_BLOG_SUCCESS,
        data: response?.data,
      });
    }
  } catch (error) {
    yield put({ type: types.GET_ONE_BLOG_FAIL });
  }
}

export function* deleteBlogSaga({ blogId }) {
  try {
    yield put({ type: types.DELETE_BLOG_START });
    const response = yield call(deleteBlogApi, blogId);
    if (response.data.statusMessage === "FAIL") {
      yield put({ type: types.DELETE_BLOG_FAIL });
      toastMessage.error(response.data.message);
    } else {
      const resJobLists = yield call(getBlogListApi);
      yield put({
        type: types.GET_BLOG_LIST_SUCCESS,
        data: resJobLists.data,
      });
      yield put({ type: types.DELETE_BLOG_SUCCESS, data: response.data });
    }
  } catch (error) {
    yield put({ type: types.DELETE_BLOG_FAIL });
  }
}

export function* updateBlogSaga() {}

export function* postBlogSaga({ data, reset, setEditor }) {
  try {
    yield put({ type: types.POST_BLOG_START });
    const response = yield call(postBlogApi, data);
    console.log(response);
    if (response.data.statusMessage === "FAIL") {
      yield put({ type: types.POST_BLOG_FAIL });
      toastMessage.error(response.data.message);
    } else {
      if (response?.data?.statusMessage === "SUCCESS") {
        yield put({ type: types.POST_BLOG_SUCCESS, data: response.data });
        toastMessage.success(response?.data?.message);
        reset();
        setEditor("");
      } else {
        toastMessage.error(response?.data?.message);
      }
    }
  } catch (error) {
    yield put({ type: types.POST_BLOG_FAIL });
  }
}

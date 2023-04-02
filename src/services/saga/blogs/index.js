import { put, call } from "redux-saga/effects";
import * as types from "../../action";
import { toastMessage } from "../../../components/toast";
import { getBlogListApi } from "../../api";
export function* getBLogListSaga() {
  try {
    yield put({ type: types.GET_BLOG_LIST_START });
    const response = yield call(getBlogListApi);

    // console.log(response);
    if (response.data.statusMessage === "FAIL") {
      yield put({ type: types.GET_BLOG_LIST_FAIL });
      toastMessage.error(response.data.message);
    } else {
      yield put({
        type: types.GET_BLOG_LIST_SUCCESS,
        data: response?.data?.data,
      });
    }
  } catch (error) {
    yield put({ type: types.GET_BLOG_LIST_FAIL });
  }
}

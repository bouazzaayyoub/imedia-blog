import { put, takeEvery } from "@redux-saga/core/effects";
import { IAction } from "../../../utils/types";
import { FETCH_POSTS_LIST } from "./post.types";
import { fetchPosts as fetchPostsService } from "../../../services/posts.service";
import { fetchPostsError, fetchPostsSuccess } from "./post.action";
import { takeLatest } from "redux-saga/effects";

export function* fetchPosts({ type, payload }: IAction): any {
  try {
    const response = yield fetchPostsService();
    yield put(fetchPostsSuccess(response));
    console.log(response.data);
  } catch (err) {
    yield put(fetchPostsError(err));
  }
}

function* postsSaga() {
  yield takeLatest(FETCH_POSTS_LIST, fetchPosts);
}

export default postsSaga;

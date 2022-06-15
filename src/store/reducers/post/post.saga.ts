import { put, takeEvery } from "@redux-saga/core/effects";
import { IAction } from "../../../utils/types";
import {
  fetchPosts as fetchPostsService,
  fetchPostById as fetchPostByIdService,
} from "../../../services/posts.service";
import { takeLatest } from "redux-saga/effects";
import {
  fetchPostByid,
  fetchPostByIdError,
  fetchPostByIdSuccess,
} from "./post.action";
import { FETCH_POST } from "./post.types";
import { fetchCommentsByPostId } from "../../../services/comment.service";

export function* fetchPostById({ type, payload }: IAction): any {
  try {
    const post = yield fetchPostByIdService(payload.id);
    const comments = yield fetchCommentsByPostId(payload.id);
    yield put(fetchPostByIdSuccess({ ...post, comments: comments }));
  } catch (err) {
    yield put(fetchPostByIdError(err));
  }
}

function* postSaga() {
  yield takeLatest(FETCH_POST, fetchPostById);
}

export default postSaga;

import { all } from "redux-saga/effects";
import postsSaga from "./reducers/listPosts/post.saga";
import postSaga from "./reducers/post/post.saga";

export default function* rootSaga() {
  yield all([postsSaga(), postSaga()]);
}

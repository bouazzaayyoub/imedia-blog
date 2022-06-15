import { takeEvery, takeLatest } from "redux-saga/effects";
import postSaga, { fetchPostById } from "./post.saga";
import { FETCH_POST } from "./post.types";

describe("fetchPosts", () => {
  const genObject = postSaga();

  it("should wait for every FETCH_POST action and call fetchPostById", () => {
    expect(genObject.next().value).toEqual(
      takeLatest(FETCH_POST, fetchPostById)
    );
  });

  it("should be done on next iteration", () => {
    expect(genObject.next().done).toBeTruthy();
  });
});

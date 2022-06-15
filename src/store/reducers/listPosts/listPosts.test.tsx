import { takeEvery, takeLatest } from "redux-saga/effects";
import postsSaga, { fetchPosts } from "./post.saga";
import { FETCH_POSTS_LIST } from "./post.types";

describe("fetchPosts", () => {
  const genObject = postsSaga();

  it("should wait for every FETCH_POSTS action and call fetchPosts", () => {
    expect(genObject.next().value).toEqual(
      takeLatest(FETCH_POSTS_LIST, fetchPosts)
    );
  });

  it("should be done on next iteration", () => {
    expect(genObject.next().done).toBeTruthy();
  });
});

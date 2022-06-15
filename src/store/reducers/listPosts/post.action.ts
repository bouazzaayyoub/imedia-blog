import {
  FETCH_POSTS_LIST,
  FETCH_POSTS_LIST_ERROR,
  FETCH_POSTS_LIST_SUCCESS,
} from "./post.types";

export const fetchPosts = () => ({
  type: FETCH_POSTS_LIST,
});

export const fetchPostsSuccess = (payload: any) => ({
  type: FETCH_POSTS_LIST_SUCCESS,
  payload,
});

export const fetchPostsError = (payload: any) => ({
  type: FETCH_POSTS_LIST_ERROR,
  payload,
});

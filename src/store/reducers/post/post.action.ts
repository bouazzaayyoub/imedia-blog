import { FETCH_POST, FETCH_POST_SUCCESS, FETCH_POST_ERROR } from "./post.types";

export const fetchPostByid = (id: string) => ({
  type: FETCH_POST,
  payload: { id },
});

export const fetchPostByIdSuccess = (payload: any) => ({
  type: FETCH_POST_SUCCESS,
  payload,
});

export const fetchPostByIdError = (payload: any) => ({
  type: FETCH_POST_ERROR,
  payload,
});

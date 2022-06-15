import { typeCreator } from "../../../utils/redux";

export const FETCH_POSTS_LIST = "FETCH_POSTS_LIST";
export const FETCH_POSTS_LIST_REQUEST = typeCreator(
  FETCH_POSTS_LIST,
  "_REQUEST"
);
export const FETCH_POSTS_LIST_SUCCESS = typeCreator(
  FETCH_POSTS_LIST,
  "_SUCCESS"
);
export const FETCH_POSTS_LIST_ERROR = typeCreator(FETCH_POSTS_LIST, "_ERROR");

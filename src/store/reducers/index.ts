import { combineReducers } from "redux";
import postListReducer from "./listPosts/post.reducer";
import postReducer from "./post/post.reducer";

const reducers = {
  post: postReducer,
  listPosts: postListReducer,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;

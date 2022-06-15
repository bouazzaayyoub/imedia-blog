import { IAction } from "../../../utils/types";
import {
  FETCH_POSTS_LIST,
  FETCH_POSTS_LIST_ERROR,
  FETCH_POSTS_LIST_SUCCESS,
} from "./post.types";

const initialState = {
  isLoading: false,
  data: [],
  error: "",
};

function postReducer(state = initialState, action: IAction) {
  switch (action.type) {
    case FETCH_POSTS_LIST: {
      return { ...state, isLoading: true };
    }

    case FETCH_POSTS_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        error: "",
      };

    case FETCH_POSTS_LIST_ERROR:
      return {
        ...state,
        data: [],
        isLoading: false,
        error: "error happend",
      };

    default:
      break;
  }
  return state;
}

export default postReducer;

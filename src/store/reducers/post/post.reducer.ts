import { IPost } from "../../../services/posts.service";
import { IAction } from "../../../utils/types";
import { FETCH_POST, FETCH_POST_ERROR, FETCH_POST_SUCCESS } from "./post.types";

interface InitialStateType {
  isLoading: boolean;
  data: IPost;
  error: string;
}

const initialState: InitialStateType = {
  isLoading: false,
  data: { id: "", body: "", comments: [], title: "", userId: "" },
  error: "",
};

function postReducer(state = initialState, action: IAction) {
  switch (action.type) {
    case FETCH_POST: {
      return { ...state, isLoading: true };
    }

    case FETCH_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };

    case FETCH_POST_ERROR:
      return { ...state, data: {}, isLoading: false, error: "error" };

    default:
      break;
  }
  return state;
}

export default postReducer;

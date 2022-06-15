import { typeCreator } from "../../../utils/redux";

export const FETCH_POST = "FETCH_POST";
export const FETCH_POST_REQUEST = typeCreator(FETCH_POST, "_REQUEST");
export const FETCH_POST_SUCCESS = typeCreator(FETCH_POST, "_SUCCESS");
export const FETCH_POST_ERROR = typeCreator(FETCH_POST, "_ERROR");

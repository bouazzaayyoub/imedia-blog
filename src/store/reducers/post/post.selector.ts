import { IPost } from "../../../services/posts.service";

const postSelector = (state: any): IPost => state.post.data;

const isLoadingSelector = (state: any): boolean => state.post.isLoading;

const errorMessageSelector = (state: any): string => state.post.error;

export { postSelector, isLoadingSelector, errorMessageSelector };

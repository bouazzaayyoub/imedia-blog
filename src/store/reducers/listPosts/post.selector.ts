import { IPost } from "../../../services/posts.service";

const postSelector = (state: any): IPost[] => state.listPosts.data;

const isLoadingSelector = (state: any): boolean => state.listPosts.isLoading;

const errorMessageSelector = (state: any): string => state.listPosts.error;

export { postSelector, errorMessageSelector, isLoadingSelector };

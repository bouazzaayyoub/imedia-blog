import { createCachedFetch } from "../helpers";

export type IPost = {
  userId: string;
  id: string;
  title: string;
  body: string;
  comments: Array<{
    id: string;
    name: string;
    email: string;
    body: string;
  }>;
};

const customFetch = createCachedFetch();

export async function fetchPosts() {
  const data = customFetch("https://jsonplaceholder.typicode.com/posts");
  return data;
}

export async function fetchPostById(id: string) {
  const data = customFetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return data;
}

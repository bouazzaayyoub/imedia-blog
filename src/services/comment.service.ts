import { createCachedFetch } from "../helpers";

const customFetch = createCachedFetch();

export async function fetchCommentsByPostId(id: string) {
  const data = customFetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );
  return data;
}

import { apiUrl } from "./base";

export type Post = {
  id: string;
  title: string;
  body: string;
  userId: string;
};

export type Comment = {
  id: string;
  email: string;
  body: string;
  postId: string;
};

export async function getPosts() {
  const res = await fetch(`${apiUrl}/posts`);
  return (await res.json()) as Post[];
}

export async function getPost(id: string) {
  const res = await fetch(`${apiUrl}/posts/${id}`);
  return (await res.json()) as Post;
}

export async function getComments(id: string) {
  const res = await fetch(`${apiUrl}/comments?postId=${id}`);
  return (await res.json()) as Comment[];
}

export async function getUserPosts(id: string) {
  const res = await fetch(`${apiUrl}/posts?userId=${id}`);
  return (await res.json()) as Post[];
}

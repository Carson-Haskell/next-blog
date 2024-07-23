import { Comment, getComments, getPost } from "@/api/posts";
import { getUser } from "@/api/users";
import Link from "next/link";

export default async function Post({ params }: { params: { id: string } }) {
  const post = await getPost(params.id);
  const author = await getUser(post.userId);

  return (
    <div className="p-8 flex flex-col gap-3">
      <h1 className="font-bold text-3xl">{post.title}</h1>
      <h2 className="text-xl">
        By:{" "}
        <Link
          className="underline hover:text-blue-500 transition duration-200"
          href={`/users/${author.id}`}
        >
          {author.name}
        </Link>
      </h2>
      <p>{post.body}</p>
      <h3 className="font-bold text-xl mt-6">Comments</h3>
      <PostComments postId={params.id} />
    </div>
  );
}

async function PostComments({ postId }: { postId: string }) {
  const comments = await getComments(postId);

  return (
    <>
      {comments.map((comment: Comment) => (
        <div
          key={comment.id}
          className="bg-white/80 p-4 rounded-xl flex flex-col gap-2 "
        >
          <p className="text-xs text-slate-500/80 self-start">
            {comment.email}
          </p>
          <p>{comment.body}</p>
        </div>
      ))}
    </>
  );
}

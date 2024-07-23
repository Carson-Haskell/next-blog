import { getPosts, Post } from "@/api/posts";
import Card from "@/components/Card";

export default async function Posts() {
  const posts = await getPosts();

  return (
    <div className="w-full">
      <div className="font-bold text-4xl p-6 text-center mb-4">Posts</div>
      <div className="flex justify-center flex-wrap items-center gap-6 w-full mb-12">
        {posts.map((post: Post) => (
          <Card title={post.title} key={post.id} pageHref={`posts/${post.id}`}>
            <p>{post.body}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}

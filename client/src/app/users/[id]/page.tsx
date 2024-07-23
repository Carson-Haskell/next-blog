import { getUserPosts, Post } from "@/api/posts";
import { getUser } from "@/api/users";

import Card from "@/components/Card";

export default async function User({ params }: { params: { id: string } }) {
  return (
    <div className="p-8 flex flex-col">
      <UserDetails userId={params.id} />
      <h3 className="font-bold text-xl mt-6">Posts</h3>
      <UserPosts userId={params.id} />
    </div>
  );
}

async function UserDetails({ userId }: { userId: string }) {
  const user = await getUser(userId);

  const userAddress = `${user.address.street} ${user.address.suite} ${user.address.city} ${user.address.zipcode}`;

  return (
    <>
      <h1 className="font-bold text-3xl pb-2">{user.name}</h1>
      <h2 className="text-slate-700/80">{user.email}</h2>
      <p className="text-slate-700/80 pt-4">
        <span className="font-bold text-black">Company:</span>{" "}
        {user.company.name}
      </p>
      <p className="text-slate-700/80">
        <span className="font-bold text-black">Website:</span> {user.website}
      </p>
      <p className="text-slate-700/80">
        <span className="font-bold text-black">Address:</span> {userAddress}
      </p>
    </>
  );
}

async function UserPosts({ userId }: { userId: string }) {
  const posts = await getUserPosts(userId);

  return (
    <div className="flex flex-wrap w-full gap-4 pt-4">
      {posts.map((post: Post) => (
        <Card key={post.id} title={post.title} pageHref={`/posts/${post.id}`}>
          <p>{post.body}</p>
        </Card>
      ))}
    </div>
  );
}

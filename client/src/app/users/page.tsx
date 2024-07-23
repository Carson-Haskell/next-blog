import { getUsers, User } from "@/api/users";
import Card from "@/components/Card";

async function Users() {
  const users = await getUsers();

  return (
    <div className="w-full">
      <div className="font-bold text-4xl p-6 text-center mb-4">Users</div>
      <div className="flex justify-center flex-wrap items-center gap-6 w-full mb-12">
        {users.map((user: User) => (
          <Card title={user.name} key={user.id} pageHref={`users/${user.id}`}>
            <p>{user.username}</p>
            <p>{user.website}</p>
            <p>{user.email}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Users;

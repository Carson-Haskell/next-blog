import { apiUrl } from "./base";

export type User = {
  id: string;
  name: string;
  username: string;
  website: string;
  email: string;
  address: {
    city: string;
    street: string;
    suite: string;
    zipcode: string;
  };
  company: {
    name: string;
  };
};

export async function getUsers() {
  const res = await fetch(`${apiUrl}/users`);
  return (await res.json()) as User[];
}

export async function getUser(id: string) {
  const res = await fetch(`${apiUrl}/users/${id}`);
  return (await res.json()) as User;
}

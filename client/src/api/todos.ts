import { apiUrl } from "./base";

export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export async function getTodos() {
  const res = await fetch(`${apiUrl}/todos`);
  return (await res.json()) as Todo[];
}

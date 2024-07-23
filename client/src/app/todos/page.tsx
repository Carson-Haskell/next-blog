import { getTodos, Todo } from "@/api/todos";

import { Checkbox } from "@/components/ui/checkbox";

export default async function Todos() {
  const todos = await getTodos();

  return (
    <div className="w-full flex-col flex">
      <div className="font-bold text-4xl p-6 text-center mb-4">Todos</div>
      <div className=" w-[50%] self-center bg-white/70 rounded-3xl mb-12">
        <div className="flex flex-col gap-4 w-full ml-12 my-8">
          {todos.map((todo: Todo) => (
            <div className="flex items-center space-x-4 w-[70%]" key={todo.id}>
              <Checkbox id={`todo-${todo.id}`} checked={todo.completed} />
              <label
                htmlFor={`todo-${todo.id}`}
                className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer ${
                  todo.completed ? "line-through" : ""
                }`}
              >
                {todo.title}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

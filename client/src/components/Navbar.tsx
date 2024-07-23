import Link from "next/link";

export default function Navbar({ params }: any) {
  return (
    <nav className="flex w-full justify-between px-6 py-6 text-white bg-blue-900 items-center">
      <div className="text-2xl">My App</div>
      <ul className="flex gap-6 text-xl">
        <li className="hover:text-white/75 transition duration-200">
          <Link href="/posts">Posts</Link>
        </li>
        <li className="hover:text-white/75 transition duration-200">
          <Link href="/users">Users</Link>
        </li>
        <li className="hover:text-white/75 transition duration-200">
          <Link href="/todos">Todos</Link>
        </li>
      </ul>
    </nav>
  );
}

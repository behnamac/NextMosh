import Link from "next/link";

const Sidebar = () => (
  <aside className="w-64 h-screen bg-gray-800 text-white flex flex-col p-4">
    <h2 className="text-2xl font-bold mb-8">Dashboard</h2>
    <nav className="flex flex-col gap-4">
      <Link href="/" className="hover:text-gray-300">
        Home
      </Link>
      <Link href="/users" className="hover:text-gray-300">
        Users
      </Link>
      <Link href="/products" className="hover:text-gray-300">
        Products
      </Link>
      <Link href="/settings" className="hover:text-gray-300">
        Settings
      </Link>
    </nav>
  </aside>
);

export default Sidebar;

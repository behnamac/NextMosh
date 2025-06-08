import React from "react";
import Link from "next/link";
import { sort } from "fast-sort";

interface UserTableProps {
  sortOrder?: string;
}

interface User {
  id: number;
  name: string;
  email: string;
}

const UserTable = async ({ sortOrder }: UserTableProps) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();
  const sortedUsers=sort(users).asc(
    sortOrder === "email" ? (user) => user.email : (user) => user.name
  );
  if (!users) {
    return <div>Loading...</div>;
  }
  return (
    <table>
      <thead className="bg-gray-100">
        <tr>
          <th className="px-6 py-3 text-left font-semibold">Id</th>
          <th className="px-6 py-3 text-left font-semibold">
            <Link href="/users?sortOrder=name">Name</Link>
          </th>
          <th className="px-6 py-3 text-left font-semibold">
            {" "}
            <Link href="/users?sortOrder=email">Email</Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedUsers.map((user) => (
          <tr key={user.id} className="border-b border-gray-200">
            <td className="px-6 py-3">{user.id}</td>
            <td className="px-6 py-3">{user.name}</td>
            <td className="px-6 py-3">{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;

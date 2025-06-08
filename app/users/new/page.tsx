import React from "react";

interface User {
  id: number;
  name: string;
}

const page = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();

  return (
    <>
      <h1 className="text-3xl text-white font-bold">User List</h1>
      <ul className="text-white">
        {users.map((user) => (
          <li key={user.id} className="text-2xl font-bold">
            {user.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default page;

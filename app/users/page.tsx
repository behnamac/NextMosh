import React from "react";
import UserTable from "../components/UserTable";

interface UserPageProps {
  searchParams: { sortOrder?: string };
}

const UserPage = ({ searchParams: { sortOrder } = {} }: UserPageProps) => {
  console.log("sortOrder", sortOrder);
  return (
    <section className="flex flex-col items-center justify-center min-h-screen ">
      <h1 className="font-bold text-2xl mb-10">Users</h1>
      <UserTable sortOrder={sortOrder}/>
    </section>
  );
};

export default UserPage;

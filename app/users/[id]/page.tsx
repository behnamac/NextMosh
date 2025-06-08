import React from "react";

interface Params {
  params: { id: string };
}
const page = ({ params: { id } }: Params) => {
  return <div>page{id}</div>;
};

export default page;

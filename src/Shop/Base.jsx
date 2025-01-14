import React, { useState } from "react";
import Head from "./Head";
import Left from "./Left";
import Right from "./Right";
export default function Base() {
  const [data, setData] = useState();

  return (
    <>
      <Head />
      <div className="flex">
        <Left setData={setData} />
        <Right data={data} />
      </div>
    </>
  );
}

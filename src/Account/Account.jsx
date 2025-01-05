import React from "react";
import Left from "./Left";
import Right from "./Right";
import Head from "./Head";
export default function Account() {
  return (
    <div>
      <div>
        <Head />
      </div>
      <div className="flex justify-center mt-5 ml-28 w-full ">
        <Left />
        <Right />
      </div>
    </div>
  );
}

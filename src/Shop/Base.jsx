import React from "react";
import Head from "./Head";
import Left from "./Left";
import Right from "./Right";
export default function Base() {
  return (
    <>
      <Head />
      <div className="flex">
        <Left />
        <Right />
      </div>
    </>
  );
}

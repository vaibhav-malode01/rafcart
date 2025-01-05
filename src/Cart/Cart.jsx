import React from "react";
import Left from "./Left";
import Right from "./Right";
import { useLocation } from "react-router-dom";
export default function Cart() {
  const location = useLocation();
  const { id = -1, image = "", title = "", price = 0 } = location.state || {};

  return (
    <div className="flex flex-between gap-x-4 w-[90%] ml-36 mt-16 mr-10">
      <Left id={id} image={image} title={title} price={price}></Left>
      <Right></Right>
    </div>
  );
}

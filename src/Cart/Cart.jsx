import React from "react";
import Left from "./Left";
import Right from "./Right";
import { useLocation } from "react-router-dom";
import { useState } from "react";

export default function Cart() {
  return (
    <div className="flex flex-between gap-x-4 w-[90%] ml-36 mt-16 mr-10">
      <Left></Left>
      <Right></Right>
    </div>
  );
}

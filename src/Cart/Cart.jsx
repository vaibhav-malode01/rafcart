import React from "react";
import Left from "./Left";
import Right from "./Right";
import { useLocation } from "react-router-dom";
import { useState } from "react";
export default function Cart() {
  const location = useLocation();
  const { id , image = "", title = "", price = 0 } = location.state || {};
  const cartId= id!==undefined ?id:-1;
  const[actual,setActual]=useState();
  function billing(cartItems)
  {
      setActual(cartItems);
  }
  
  return (

    <div className="flex flex-between gap-x-4 w-[90%] ml-36 mt-16 mr-10">
      <Left id={cartId} image={image} title={title} price={price} billing={billing}></Left>
      <Right actual={actual}></Right>
    </div>
  );
}

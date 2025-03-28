import React, { useState, useEffect } from "react";
import Cartcard from "./Cartcard";
import { useCart } from "../context/CartContext";

export default function Left() {
  const { cart } = useCart();

  return (
    <div className="flex flex-col gap-y-3 w-[60%] shadow-lg">
      <h1 className="font-bold text-xl ml-8">SHOPPING CART</h1>
      <div className="flex flex-col gap-y-2 w-full pl-8 pr-8 pt-4">
        {cart?.length > 0 ? (
          cart.map((item, index) => (
            <Cartcard
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
            />
          ))
        ) : (
          <p className="text-gray-500 mt-4  text-xl font-semibold">
            Your Cart Is Empty.
          </p>
        )}
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import CartWish from "./CartWish";
import { useCart } from "../context/CartContext";
export default function Right() {
  const { wish } = useCart();
  console.log(wish);
  return (
    <div className="flex flex-col gap-y-3 w-[60%] shadow-lg">
      <h1 className="font-bold text-xl ml-8">WISHLIST</h1>
      <div className="flex flex-col gap-y-2 w-full pl-8 pr-8 pt-4">
        {wish?.length > 0 ? (
          wish.map((item, index) => (
            <CartWish
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
            />
          ))
        ) : (
          <p className="text-gray-500 mt-4  text-xl font-semibold">
            Your WishList Is Empty.
          </p>
        )}
      </div>
    </div>
  );
}

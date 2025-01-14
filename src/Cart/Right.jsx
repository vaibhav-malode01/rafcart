import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCart } from "../context/CartContext";
export default function Right() {
  const { cart } = useCart();

  let total = 0;
  const quantities = useSelector((state) => state.quantities.quantities);
  const dispatch = useDispatch();

  return (
    <div className="w-[30%] h-auto  shadow-md px-4">
      <h1 className="font-bold text-xl mx-auto mt-2  ml-1">ORDER SUMMARY</h1>
      {cart?.length > 0 ? (
        cart.map((item) => {
          const quantity = quantities.find((q) => q.id === item.id)?.value || 1;
          {
            total = total + quantity * item.price;
          }

          return (
            <div className="flex flex-col gap-y-4 mt-8" key={item.id}>
              <div className="grid grid-cols-4 items-center text-center w-full ">
                <div className="font-semibold col-span-2">{item.title}</div>
                <div className="flex w-5 justify-between">
                  <h3 className="h-6  text-sm">{}</h3>
                </div>
                <div>{quantity * item.price}</div>
              </div>
            </div>
          );
        })
      ) : (
        <p className="text-gray-500 mt-4">No items in the order summary.</p>
      )}

      <hr className="bg-gray-500 mt-8"></hr>
      <div className="mt-3 w-full grid grid-cols-5 justify-evenly   border-white border-solid ">
        <p className="text-xl text-black font-bold col-start-2">Total</p>
        <p className="text-xl text-black font-bold col-start-5">{total}</p>
      </div>
      <hr className="bg-gray-500 mt-4"></hr>
      <button className=" w-full mx-auto bg-red-500 text-white mt-4 h-10 rounded-lg hover:text-xl">
        Place Order
      </button>
    </div>
  );
}

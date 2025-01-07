import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../src/redux/Quantity/quantitySlice";

export default function Right({ actual }) {
  let total=0;
  const quantities = useSelector((state) => state.quantities.quantities);
  const dispatch = useDispatch();

  const [bill, setBill] = useState([]);

  useEffect(() => {
    setBill(actual || []); // Fallback to an empty array if `actual` is undefined
  }, [actual]);

  return (
    <div className="w-[30%] h-auto border border-dashed ">
      <h1 className="font-bold text-xl mx-auto mt-4 ml-1">ORDER SUMMARY</h1>
      {bill?.length > 0 ? (
        bill.map((item) => {
          const quantity = quantities.find((q) => q.id === item.id)?.value || 1;
          {total=total+quantity*item.price}

          return (
            <div className="flex flex-col gap-y-4 mt-8" key={item.id}>
              <div className="flex justify-evenly w-full border border-gray-200">
                <div className="font-semibold">{item.title}</div>
                <div className="flex w-15 justify-between">

                  <h3 className="h-6 w-5 text-center text-sm">{quantity}</h3>
                
                </div>
                <div>{quantity*item.price}</div>
              </div>
            </div>
          );
        })
      ) : (
        <p className="text-gray-500 mt-4">No items in the order summary.</p>
      )}

      <hr className="bg-gray-500 mt-8"></hr>
      <div className="mt-3 w-full flex justify-between  border-white border-solid ">
            <p className="text-xl text-black ml-14 font-bold">Total</p>
            <p className="text-xl text-black mr-14 font-bold">{total}</p>
      </div>
      <hr className="bg-gray-500 mt-4"></hr>
      <button className=" w-full mx-auto bg-red-500 text-white mt-4 h-10 rounded-lg hover:text-xl">Place Order</button>

    </div>

  );
}

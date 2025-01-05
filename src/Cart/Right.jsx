import React from "react";

export default function Right() {
  return (
    <div className="w-[30%] h-auto ">
      <h1 className="font-bold text-xl mx-auto">ORDER SUMMARY</h1>
      <div className="flex flex-col gap-y-4 mt-8">
        <div className="flex justify-evenly w-full border border-gray-200 ">
          <div className="font-semibold">ITALIAN SHAPE</div>
          <div>quantity</div>
          <div>price</div>
        </div>
        <div className="flex justify-evenly   w-full  border border-gray-200 ">
          <div className="font-semibold">ITALIAN SHAPE</div>
          <div>quantity</div>
          <div>price</div>
        </div>
        <div className="flex justify-evenly   w-full  border border-gray-200 ">
          <div className="font-semibold">ITALIAN SHAPE</div>
          <div>quantity</div>
          <div>price</div>
        </div>
      </div>
    </div>
  );
}

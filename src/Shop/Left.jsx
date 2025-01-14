import React from "react";
import Checks from "./Checks";
import { useState, useEffect } from "react";
export default function Left({ setData }) {
  // const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    const categoryQuery = category !== "All" ? `?category=${category}` : "";
    fetch(`http://localhost:3000/products${categoryQuery}`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [category]);

  function handelCat(cat) {
    setCategory(cat);
  }
  return (
    <div className="w-[360px] ml-36 flex flex-col bg-white shadow-md mt-2 pl-4 pr-4 ">
      <div className="flex flex-col w-full gap-y-1 ">
        <div>
          <h1 className="font-bold">CATEGORIES</h1>
        </div>
        <Checks name="Bedroom" Count={15} handel={handelCat} />
        <Checks name="Sofa" Count={15} handel={handelCat} />
        <Checks name="Bedroom" Count={15} handel={handelCat} />
        <Checks name="Bedroom" Count={15} handel={handelCat} />
      </div>
      <hr className="mb-3 mt-3 " />
      <div className="flex flex-col w-full gap-y-1 ">
        <div>
          <h1 className="font-bold">BRAND</h1>
        </div>
        <div>
          <Checks name="HomeComfort" Count={15} />

          <Checks name="ComfortLux" Count={15} />
          <Checks name="CozyCorner" Count={15} />
          <Checks name="StorageKing" Count={15} />
          <Checks name="Benz" Count={15} />
        </div>
      </div>
      <hr className="mb-3 mt-3 " />

      <div className="flex flex-col w-full">
        <div>
          <h1 className="font-bold">PRICE</h1>
        </div>
        <div className="flex justify-between  w-full gap-x-1 mt-2">
          <input
            type="number"
            name=""
            id=""
            placeholder="min"
            className="border border-gray-400 w-1/2 rounded-md h-10"
          />
          <p className="mt-2">-</p>
          <input
            type="number"
            name=""
            id=""
            placeholder="max"
            className="border border-gray-400
             w-1/2 rounded-md h-10 "
          />
        </div>
      </div>
      <hr className="mb-3 mt-3 " />

      <div>
        <div className=" font-bold ">SIZE</div>
        <div className="flex justify-between w-36 mt-2">
          <div className="border border-black h-5 w-5 text-center text-sm">
            XS
          </div>
          <div className="border border-black h-5 w-5 text-center text-sm">
            S
          </div>
          <div className="border border-black h-5 w-5 text-center text-sm">
            M
          </div>
          <div className="border border-black h-5 w-5 text-center text-sm">
            L
          </div>
          <div className="border border-black h-5 w-5 text-center text-sm">
            XL
          </div>
        </div>
      </div>

      <hr className="mb-3 mt-3 " />

      <div>
        <div className="font-bold  ">COLOR</div>
        <div className="flex w-36 mt-2 mb-2">
          <div className="border  h-5 w-5 text-center text-sm bg-red-600"></div>
          <div className="border  h-5 w-5 text-center text-sm bg-black mr-2 ml-2"></div>
          <div className="border  h-5 w-5 text-center text-sm bg-white"></div>
        </div>
      </div>
    </div>
  );
}

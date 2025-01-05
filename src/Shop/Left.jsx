import React from "react";
import Checks from "./Checks";
export default function Left() {
  return (
    <div className="w-[360px] ml-36 flex flex-col bg-white shadow-md mt-2 pl-4 pr-4 mr-10">
      <div className="flex flex-col w-full gap-y-1 ">
        <div>
          <h1 className="font-bold">CATEGORIES</h1>
        </div>
        <Checks name="Bedroom" Count={15} />
        <Checks name="Sofa" Count={15} />
        <Checks name="Bedroom" Count={15} />
        <Checks name="Bedroom" Count={15} />
      </div>
      <hr className="mb-3 mt-3 " />
      <div className="flex flex-col w-full gap-y-1 ">
        <div>
          <h1 className="font-bold">BRAND</h1>
        </div>
        <div>
          <Checks name="Olymic" Count={15} />
          <Checks name="Toyota" Count={15} />
          <Checks name="ETC" Count={15} />
          <Checks name="AUdi" Count={15} />
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

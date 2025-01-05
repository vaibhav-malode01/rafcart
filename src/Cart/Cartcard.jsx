import React, { useEffect } from "react";
import { MdDelete } from "react-icons/md";
export default function Cartcard({ id, image, title, price }) {
  return (
    <div>
      <div className="flex space-x-20 h-28   border border-gray-100 bg-gray-100 mb-5 items-center rounded-md ">
        <div className="h-full w-20 mt-1">
          <img src={image} className=" ml-8 mt-4 rounded-sm"></img>
        </div>
        <div>
          <div className="font-bold">{title}</div>
          <div className="flex">
            <p className="mr-1">Availability : </p> <p> In Stock</p>{" "}
          </div>
        </div>
        <div>
          <select name="Quantity" id="">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <div className="font-bold text-red-700">{price}</div>

        <div>
          <MdDelete className="text-2xl mr-2" />
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/Quantity/quantitySlice";
import { Link } from "react-router-dom";
export default function CartWish({ id, image, title, price, del }) {
  const quantities = useSelector((state) => state.quantities.quantities);
  const dispatch = useDispatch();

  const quantity = quantities.find((q) => q.id === id)?.value || 1;

  console.log("Quantities:", quantities);
  console.log("Quantity for this card:", quantity);

  return (
    <div>
      <div className="flex space-x-20 h-28 border border-gray-100 bg-gray-100 mb-5 items-center rounded-md">
        <div className="h-full w-20 mt-1">
          <img src={image} className="ml-8 mt-4 rounded-sm" alt={title} />
        </div>
        <div>
          <div className="font-bold">{title}</div>
          <div className="flex">
            <p className="mr-1">Availability:</p> <p>In Stock</p>
          </div>
        </div>
        <div className="flex w-15 justify-between">
          <button
            className="border h-6 w-5 text-center text-sm"
            onClick={() => dispatch(decrement(id))}
          >
            -
          </button>
          <h3 className="h-6 w-5 text-center text-sm">{quantity}</h3>
          <button
            className="border h-6 w-5 text-center text-sm"
            onClick={() => dispatch(increment(id))}
          >
            +
          </button>
        </div>
        <div className="font-bold text-red-700">{price}</div>
        <div className="w-full mt-2">
          <Link to="/Cart" state={{ id, image, title, price }}>
            <button className="bg-red-500 text-white w-full h-10 hover:text-lg p-2 font-bold  rounded-md">
              Add to cart
            </button>
          </Link>
        </div>
        <div>
          <button onClick={() => del(id)} className="p-2">
            <MdDelete className="text-2xl text-red-600 hover:text-red-800" />
          </button>
        </div>
      </div>
    </div>
  );
}
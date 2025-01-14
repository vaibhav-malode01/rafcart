import React from "react";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
export default function CartWish({ id, image, title, price }) {
  const { addToCart, removeFromWish } = useCart();
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

        <div className="font-bold text-red-700">{price}</div>
        <div className="w-full mt-2">
          <Link to="/Cart">
            <button
              className="bg-red-500 text-white w-full h-10 hover:text-lg p-2 font-bold  rounded-md"
              onClick={() =>
                addToCart({ id, image, title, price }, removeFromWish(id))
              }
            >
              Add to cart
            </button>
          </Link>
        </div>
        <div>
          <button onClick={() => removeFromWish(id)} className="p-2">
            <MdDelete className="text-2xl text-red-600 hover:text-red-800" />
          </button>
        </div>
      </div>
    </div>
  );
}

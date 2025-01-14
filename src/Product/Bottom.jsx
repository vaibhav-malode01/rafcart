import { useEffect } from "react";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
export default function Bottom({ id, image, title, price }) {
  useEffect(() => {}, [id]);
  const { addToCart } = useCart();
  return (
    <div className="flex  h-[80px] w-[550px]  ml-36 mt-5 ">
      <div className="flex gap-x-4">
        <div className="w-[100px] h-full ">
          <img
            className="h-full"
            src="https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg?auto=compress&cs=tinysrgb&w=600"
          ></img>
        </div>
        <div className="w-[100px] h-full ">
          <img
            className="h-full"
            src="https://images.pexels.com/photos/5998132/pexels-photo-5998132.jpeg?auto=compress&cs=tinysrgb&w=600"
          ></img>
        </div>
        <div className="w-[100px] h-full ">
          <img
            className="h-full"
            src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600"
          ></img>
        </div>
        <div className="w-[100px] h-full ">
          <img
            className="h-full w-full"
            src="https://images.pexels.com/photos/4778344/pexels-photo-4778344.jpeg?auto=compress&cs=tinysrgb&w=600"
          ></img>
        </div>
        <div className="w-[100px] h-full ">
          <img
            className="h-full"
            src="https://images.pexels.com/photos/116910/pexels-photo-116910.jpeg?auto=compress&cs=tinysrgb&w=600"
          ></img>
        </div>
      </div>
      <div className="flex -ml-6 gap-x-1">
        <Link to="/Cart">
          <button
            class="bg-red-500 w-60 h-12 ml-16 mt-5 text-white font-bold py-2 px-4 rounded"
            onClick={() => addToCart({ id, title, image, price })}
          >
            Add To Cart
          </button>
        </Link>
        <Link to="/Wishlist" state={{ id, title, image, price }}>
          <button class="bg-white w-60 h-12 ml-16 mt-5 text-gray-500 border border-gray-500 font-bold py-2 px-4 rounded">
            Wish List
          </button>
        </Link>
      </div>
    </div>
  );
}

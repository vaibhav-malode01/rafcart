import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
export default function Card({ id, image, title, price }) {
  return (
    <>
      <div className="h-400px w-[400px] border  ">
        <div className="h-[150px]">
          <Link to="/Product" state={{ id, image }}>
            <img className="w-full h-full object-cover" src={image} alt="#" />
          </Link>
        </div>

        <div className="ml-3 gap-y-2 ">
          <h3 className="text-black  font-bold "> {title}</h3>
          <div className="flex gap-x-2">
            <h3 className="text-red-600 font-bold ">${price}</h3>
            <h3 className="text-gray-600  line-through">55.00</h3>
          </div>
          <div className="flex ml-0">
            <Rating name="read-only" value={5} readOnly className="text-sm" />
            <h6 className="text-gray-500">(150)</h6>
          </div>
        </div>
        <div className="w-full mt-2">
          <Link to="/Cart" state={{ id, image, title, price }}>
            <button className="bg-red-500 text-white w-full h-10 hover:text-lg p-2 font-bold  rounded-md">
              Add to cart
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

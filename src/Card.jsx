import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { useCart } from "./context/CartContext";

export default function Card({ id, title, image, price, isLike }) {
  const { addToCart, addToWish, removeFromWish, toggleLike } = useCart();

  const handleLikeClick = () => {
    // Toggle the like status of the product
    toggleLike(id);

    // If it's liked, add it to the wishlist, otherwise remove from the wishlist
    if (!isLike) {
      addToWish({ id, image, title, price });
    } else {
      removeFromWish(id);
    }
  };

  return (
    <div className="h-400px w-[400px] border">
      <div className="h-[150px]">
        <Link to="/Product" state={{ id, image, title, price }}>
          <img className="w-full h-full object-cover" src={image} alt="#" />
        </Link>
      </div>

      <div className="ml-3 gap-y-2">
        <h3 className="text-black font-bold">{title}</h3>
        <div className="flex gap-x-2">
          <h3 className="text-red-600 font-bold">${price}</h3>
          <h3 className="text-gray-600 line-through">55.00</h3>
        </div>

        <div className="flex ml-0 justify-between">
          <div className="flex">
            <Rating name="read-only" value={5} readOnly className="text-sm" />
            <h6 className="text-gray-500">
              ({Math.floor(Math.random() * 1000)})
            </h6>
          </div>

          <div>
            <Link to="/Wishlist">
              {isLike ? (
                <i
                  className="fa-solid fa-heart"
                  style={{ color: "red" }}
                  onClick={handleLikeClick} // Add/remove item to wishlist
                ></i>
              ) : (
                <FaRegHeart
                  style={{ color: "gray" }}
                  onClick={handleLikeClick} // Add/remove item to wishlist
                />
              )}
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full mt-2">
        <Link to="/Cart" state={{ id, image, title, price }}>
          <button
            className="bg-red-500 text-white w-full h-10 hover:text-lg p-2 font-bold rounded-md"
            onClick={() => addToCart({ id, image, title, price })}
          >
            Add to cart
          </button>
        </Link>
      </div>
    </div>
  );
}

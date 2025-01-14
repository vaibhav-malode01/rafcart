import { FcLike } from "react-icons/fc";
import { IoBag } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";
export default function Icon() {
  return (
    <div className="flex gap-x-3 items-center ">
      <Link to="/Wishlist">
        <FcLike className="text-2xl " />
      </Link>

      <Link to="/Cart">
        <IoBag className="text-2xl" />
      </Link>

      <Link to="/Account">
        <CiUser className="text-2xl" />
      </Link>
    </div>
  );
}

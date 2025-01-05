import { IoHomeSharp } from "react-icons/io5";
import { MdNavigateNext } from "react-icons/md";

export default function Home() {
  return (
    <div className="flex pl-36 mt-2 items-center">
      <IoHomeSharp className="text-red-500" />
      <MdNavigateNext className="text-gray-500" />
      <p className="text-gray-500">Product Details</p>
    </div>
  );
}

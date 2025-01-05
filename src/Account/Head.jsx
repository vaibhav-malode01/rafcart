import { IoHomeSharp } from "react-icons/io5";
import { MdNavigateNext } from "react-icons/md";

export default function Head() {
  return (
    <div className="flex pl-36 mt-4 mb-4 items-center">
      <IoHomeSharp className="text-red-500" />
      <MdNavigateNext className="text-gray-500" />
      <p className="text-gray-500">Account</p>
    </div>
  );
}

import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

export default function Left() {
  return (
    <div className=" w-80 h-52 mt-12   items-start">
      <div className="flex justify-start mx-10">
        <h1 className="text-red-600 font-bold">RAF</h1>
        <h1 className="text-black font-bold">CART</h1>
      </div>
      <div className="p-5 pl-10">
        <p className="text-sm text-gray-500">
          Lorem ipsum eius maxime quo obcaecati ullam totam eveniet architecto,
          excepturi rem!
        </p>
      </div>
      <div className="pl-10 flex gap-x-2 opacity-50">
        <FaFacebookSquare />
        <FaInstagram />
        <FaTwitterSquare />
        <FaGithubSquare />
      </div>
    </div>
  );
}

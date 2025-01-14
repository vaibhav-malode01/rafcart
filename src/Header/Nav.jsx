import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import i1 from "../assets/Images/i1.jpg";

export default function Nav() {
  const [filter, setFilter] = useState(false);

  return (
    <div className="bg-black w-full">
      <nav className="bg-black">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl"></div>
      </nav>
      <nav className="dark:bg-gray-700">
        {/* // Main Navbar contain everything*/}
        <div className="max-w-screen-xl px-4 mx-auto h-12">
          <div className="flex items-center h-full   ">
            <div className="h-full">
              <ul className="flex flex-row font-medium space-x-8 text-sm">
                <div
                  className="bg-red-600 h-12 text-center w-52 py-1 flex justify-center gap-x-2 cursor-pointer"
                  onClick={() => setFilter(!filter)}
                >
                  <IoMenu className="mt-2 text-lg text-white" />
                  <p className="dark:text-white mt-2">All Categories</p>
                </div>
                {filter && (
                  <div className="absolute left-[101px] bg-white text-black shadow-lg mt-12   w-52">
                    <ul>
                      <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                        Bedroom
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                        Sofa
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                        Furniture
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                        Kitchen
                      </li>
                    </ul>
                  </div>
                )}
                <li className="mt-3">
                  <Link
                    to="/"
                    className="text-white dark:text-white hover:text-orange-600 mt-2"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li className="mt-3">
                  <Link
                    to="/Shop"
                    className="text-white dark:text-white hover:text-orange-600"
                  >
                    Shop
                  </Link>
                </li>
                <li className="mt-3">
                  <Link
                    to="/Product"
                    state={{
                      id: 0,
                      image: i1,
                      price: 4000,
                      title: "GUYER CHAIR",
                    }}
                    className="text-white dark:text-white hover:text-orange-600"
                  >
                    Product
                  </Link>
                </li>
                <li className="mt-3">
                  <a
                    href="#"
                    className="text-white dark:text-white hover:text-orange-600"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex gap-x-2">
              <Link
                to="/Login"
                className="text-white ml-96 dark:text-white hover:text-orange-600"
              >
                Login
              </Link>
              <Link
                to="/Register"
                className="text-white dark:text-white hover:text-orange-600"
              >
                Register
              </Link>
            </div>
          </div>
          {/* {Main di ends} */}
        </div>
      </nav>
    </div>
  );
}

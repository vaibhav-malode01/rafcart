import { Checkbox } from "@mui/material";
import React, { useState } from "react";
import { z } from "zod";
import { Link } from "react-router-dom";

export default function Login() {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState(""); 

  const Schema = z.object({
    email: z.string().email("Invalid Email"),
    password: z.string().min(8, "Password should be at least 8 characters"),
  });

  let handelSubmit = (event) => {
    event.preventDefault();
    const result = Schema.safeParse(data);
    if (result.success) {
      setError(""); 
      alert("Form submitted successfully"); 
    } else {
      setError(result.error.errors[0]?.message || "Validation failed"); // Set the error message
    }
  };

  let handelInput = (event) => {
    setData((prevData) => {
      const updatedData = { ...prevData, [event.target.name]: event.target.value };
      
      const result = Schema.safeParse(updatedData);
      if (result.success) setError("");
      return updatedData;

    });
  };

  return (
    <div className="flex justify-center mt-14">
      <div className="border shadow-lg flex flex-col  w-[500px] gap-y-3">
        <div>
          <h1 className="font-bold ml-4 mt-3 text-2xl">LOGIN</h1>
          <p>
            <h3 className="text-gray-400 ml-4">Welcome back, customer</h3>
          </p>
        </div>
        <div>
          <form onSubmit={handelSubmit}>
            <div className="flex flex-col w-full">
              <label className=" ml-4" htmlFor="email">
                Email Address
              </label>
              <input
                className="w-[470px] border border-gray-400 h-12 mx-auto rounded-md mt-2"
                type="email"
                name="email"
                id=""
                onChange={handelInput}
                value={data.email}
                placeholder="example@gmail.com"
              />
              <label className="ml-4 mt-5" htmlFor="password">
                Password
              </label>
              <input
                className="w-[470px] border border-gray-400 h-12 mx-auto rounded-md mt-2"
                type="password"
                placeholder="*********"
                name="password"
                value={data.password}
                onChange={handelInput}
                id=""
              />
              <br />
              {error && <p className="text-red-500 ml-4">{error}</p>} 
              <div className="flex justify-between">
                <div className="ml-4">
                  <Checkbox />
                  <span className="ml-2">Remember me</span>
                </div>

                <a className="text-red-500 mr-4" href="#">
                  Forgot Password
                </a>
              </div>

              <button
                type="submit"
                className="bg-red-500 mt-5 h-10 w-[470px] rounded-sm mx-auto text-black hover:bg-white border border-red-500"
              >
                Login
              </button>
            </div>
          </form>
        </div>

        <div className="flex w-full mt-1 items-center">
          <hr className="w-[190px] bg-gray-500"></hr>
          <span className="text-sm mx-auto">OR LOGIN WITH </span>
          <hr className="w-[190px] bg-gray-500"></hr>
        </div>

        <div className="flex justify-center gap-x-4">
          <button className="bg-blue-600  w-1/2 ml-4 h-8 rounded-sm hover:bg-white border border-blue-600 ">
            FACEBOOK
          </button>
          <button className="bg-red-500  w-1/2 mr-4 h-8 rounded-sm  hover:bg-white  border border-red-500 ">
            GOOGLE
          </button>
        </div>

        <div className="mt-2 flex justify-center mb-5">
          <span className="text-gray-500 mr-1">Don't have an account?</span>
          <Link to="/Register" className="text-red-500">
            Register Now
          </Link>
        </div>
      </div>
    </div>
  );
}

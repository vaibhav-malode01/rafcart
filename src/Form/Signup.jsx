import { Checkbox } from "@mui/material";
import React, { useState } from "react";
import z from "zod";
import { Link } from "react-router-dom";
export default function Signup() {
  const [data, setData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirm: "",
    term: false,
  });
  const schema = z
    .object({
      fullname: z.string().min(1, "Name should not be empty"),
      email: z.string().email("Invalid Email"),
      password: z.string().min(8, "password should be atleast 8 characters"),
      confirm: z.string().min(8, "password does not macth"),

      term: z.boolean().refine((val) => val === true, {
        message: "You must accept the terms and conditions", // Custom message for checkbox error
      }),
    })
    .refine((data) => data.password === data.confirm, {
      message: "Password Does Not match",
    });
  let handleSubmit = (event) => {
    event.preventDefault();
    let res = schema.safeParse(data);
    if (res.success) {
      alert("form submitted");
    } else {
      alert(res.error.errors[0]?.message || "Validation failed");
    }
  };

  let handleChange = (event) => {
    const { name, value, type, checked } = event.target; // Destructure event.target
    setData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? true : value, // Use `checked` for checkboxes and `value` for other inputs
    }));
  };

  return (
    <div className="mt-14 flex justify-center w-full ">
      <div className=" w-[600px]  shadow-lg border">
        <div className="ml-16 mt-4  flex flex-col gap-y-0.5">
          <h1 className="font-bold text-2xl ">CREATE AN ACCOUNT</h1>
          <p className="text-gray-600 ">Register for new Customer</p>
        </div>

        <div className="mt-3">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-y-2 ">
              <label htmlFor="Full Name" className="ml-16">
                Full Name
              </label>
              <input
                className="ip"
                type="text"
                placeholder="John Cris Doe"
                name="fullname"
                onChange={handleChange}
                value={data.fullname}
              />

              <label htmlFor="email " className="ml-16">
                Email address
              </label>
              <input
                className="border border-gray-500 rounded w-4/5  h-10 mx-auto"
                type="email"
                name="email"
                onChange={handleChange}
                value={data.email}
                placeholder="abc@domain.com"
              />

              <label htmlFor="Password" className="ml-16">
                Password
              </label>
              <input
                className="border border-gray-500 rounded w-4/5  h-10 mx-auto"
                type="password"
                name="password"
                onChange={handleChange}
                value={data.password}
                placeholder="********"
              />

              <label htmlFor="Confirm Password " className="ml-16">
                Confirm Password
              </label>
              <input
                className="border border-gray-500 rounded w-4/5  h-10 mx-auto"
                type="password"
                onChange={handleChange}
                value={data.confirm}
                name="confirm"
                placeholder="********"
              />

              <div>
                <input
                  type="checkbox"
                  className="ml-16"
                  name="term"
                  checked={data.term}
                  onChange={handleChange}
                  // defaultChecked
                />
                <label htmlFor="checkbox">
                  I have read and agree to the{" "}
                  <span className="text-red-500">
                    <a href="#">terms and conditions</a>
                  </span>
                </label>
              </div>
              {/* {error && <div className="text-red-500 ml-16 mt-2">{error}</div>} */}

              <button
                className=" p-2 mt-2 bg-red-500 rounded w-4/5 mx-auto hover:bg-white border border-red-500"
                type="submit"
              >
                CREATE ACCOUNT
              </button>
            </div>
          </form>
        </div>

        <div className="mt-4 flex flex-col gap-y-3">
          <div className="flex items-center w-4/5 mx-auto gap-x-2">
            <hr className="w-[35%] bg-gray-800"></hr>
            <h3>
              <span>OR SIGNUP WITH</span>
            </h3>
            <hr className="w-[35%] bg-gray-800"></hr>
          </div>

          <div className="flex items-center justify-evenly   ">
            <button className=" bg-blue-500 w-2/5 h-10 shadow-lg ml-11 rounded text-lg hover:bg-white border border-blue-500">
              FACEBOOK
            </button>
            <button className=" bg-red-500 w-2/5 h-10 mr-11 shadow-lg rounded text-lg hover:bg-white border border-red-500">
              GOOGLE
            </button>
          </div>

          <div className=" flex justify-center">
            <h3>
              Already have account?{" "}
              <span className="text-red-500">
                <Link to="/Login">Login now</Link>
              </span>
            </h3>
          </div>

          <div className=" mb-8 w-4/5 mx-auto">
            <hr className="w-full bg-gray-700"></hr>
          </div>
        </div>
      </div>
    </div>
  );
}

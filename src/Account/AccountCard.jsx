import React from "react";

export default function AccountCard({
  heading,
  name,
  info,
  landline = "",
  mobile,
}) {
  return (
    <div className="flex justify-between w-[300px] bg-gray-100 border border-gray-100 shadow-md h-36">
      <div className="flex flex-col gap-y-2 ml-3">
        <h3 className="mt-3">{heading}</h3>
        <div>
          <p>{name}</p>
          <p>{info}</p>
          <p>{landline}</p>
          <p>{mobile}</p>
        </div>
      </div>
      <span className="ml-3 mt-3 mr-3">
        <a href="/" className="text-red-600">
          Edit
        </a>
      </span>
    </div>
  );
}

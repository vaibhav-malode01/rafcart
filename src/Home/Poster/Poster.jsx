import React from "react";
import poster from "../../assets/Images/poster.jpeg";

export default function Poster() {
  return (
    <div>
      <div className="h-[500px] w-full ">
        <img className="h-[500px] w-full bg-cover " src={poster} alt="" />
      </div>
    </div>
  );
}

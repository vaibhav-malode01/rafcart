import React from "react";
import ic1 from "../../assets/Images/ic1.jpg";
import ic2 from "../../assets/Images/i2.jpg";
import ic3 from "../../assets/Images/i3.jpg";
import ic4 from "../../assets/Images/ic4.jpg";
import ic5 from "../../assets/Images/ic5.jpg";
import ic6 from "../../assets/Images/ic6.jpg";
import ImageCard from "./ImageCard";

export default function Collection() {
  return (
    <div className="flex flex-col mt-8">
      <h1 className="ml-32 mb-10 font-bold text-2xl">SHOP BY CATEGORY</h1>
      <div className="flex justify-center flex-wrap gap-x-4 gap-y-3 mx-auto w-[1250px] h-96  bg-gray-100">
        <ImageCard image={ic1} />
        <ImageCard image={ic2} />
        <ImageCard image={ic3} />
        <ImageCard image={ic4} />
        <ImageCard image={ic5} />
        <ImageCard image={ic6} />
      </div>
    </div>
  );
}

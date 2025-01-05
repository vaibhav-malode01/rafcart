import React from "react";

export default function ImageCard({ image }) {
  return (
    <div className="w-[400px] h-1/2">
      <img className=" h-full w-full" src={image}></img>
    </div>
  );
}

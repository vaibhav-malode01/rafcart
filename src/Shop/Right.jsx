import React from "react";
import Cardtab from "./Cardtab";
export default function Right() {
  return (
    <div className="w-[900px] flex flex-col h-full">
      <div className=" mb-4">
        <p className="ml-10 font-bold text-2xl">Default Sorting</p>
      </div>
      <Cardtab />
      <Cardtab />
    </div>
  );
}

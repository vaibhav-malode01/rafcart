import React from "react";
import Cardtab from "./Cardtab";
import Card from "../Card";
export default function Right({ data }) {
  return (
    <div className="w-[900px] flex flex-col h-full">
      <div className=" mb-4">
        <p className="ml-10 font-bold text-2xl">Default Sorting</p>
      </div>
      {/* <Cardtab data={data} /> */}
      {/* <Cardtab /> */}
      {data &&
        data.map((item, index) => (
          <Card
            key={item.id}
            id={item.id}
            image={item.img_link}
            title={item.name}
            price={item.price}
            category={item.category}
            brand={item.brand}
          />
        ))}
    </div>
  );
}

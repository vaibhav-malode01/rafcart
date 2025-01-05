import React from "react";

export default function ShippingCard({ title, Icon }) {
  return (
    <div className="h-full w-[400px] border border-red-500 flex justify-center items-center gap-x-3">
      <Icon className="text-3xl text-red-600" />
      <h2 className="text-2xl">{title}</h2>
    </div>
  );
}

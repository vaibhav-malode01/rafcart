import React from "react";
import FootLinks from "./FootLinks";

export default function FootLinkTab() {
  const title = ["Solution", "Makreting", "Analytics", "Commerce", "Insights"];
  const title2 = [
    "Suppport",
    "Pricing",
    "Documentation",
    "Guides",
    "API Status",
  ];
  const idx = [0, 1, 2, 3, 4, 5];
  return (
    <div className=" w-[1000px] mr-32 mt-10">
      <div className="flex justify-evenly">
        <FootLinks title={title} idx={idx} />
        <FootLinks title={title2} idx={idx} />
        <FootLinks title={title} idx={idx} />
        <FootLinks title={title2} idx={idx} />
      </div>
    </div>
  );
}

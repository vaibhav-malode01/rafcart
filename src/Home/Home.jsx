import React from "react";
import Poster from "./Poster/Poster";
import Shipping from "./Shippinng/Shipping";
import Collection from "./SHOPBYCAT/Collection";
import Cardtab from "./TOPNEWARRIVALS/Cardtab";
import Offer from "./Offer/Offer";
import Recomnded from "./Recomnded/Recomnded";
export default function Home() {
  return (
    <div>
      <Poster />
      <Shipping />
      <Collection />
      <Cardtab />
      <Offer />
      <Recomnded />
    </div>
  );
}

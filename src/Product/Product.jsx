import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import i1 from "../assets/Images/i1.jpg";
import Home from "./Home";
import Main from "./Main";
import Desc from "./Desc";
import Cardtab from "./Cardtab";

export default function Product() {
  const location = useLocation();
  const { id, image } = location.state || {
    id: 0,
    image: i1,
  };

  return (
    <div>
      <Home />
      <Main image={image} id={id} />
      <Desc />
      <Cardtab />
    </div>
  );
}

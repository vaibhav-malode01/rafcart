import React, { useState ,useEffect} from "react";
import { useLocation  } from "react-router-dom";
import i1 from "../assets/Images/i1.jpg";
import Home from "./Home";
import Main from "./Main";
import Desc from "./Desc";
import Cardtab from "./Cardtab";
import ScrollToTop from "react-scroll-to-top";


export default function Product() {
   const location = useLocation();
    const { id , image = i1, title = "", price = 0 } = location.state || {};
    const cartId= id!==undefined ?id:0;
  
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top
  }, [location]); 
  

  return (
    <div>
    <ScrollToTop smooth/>
      <Home />
      <Main image={image} id={cartId} title={title} price={price}/>
      <Desc />
      <Cardtab />
    </div>
  );
}

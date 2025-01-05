import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Cartcard from "./Cartcard";

export default function Left({ id, image, title, price }) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (id && image && title && price) {
      setCartItems((prevItems) => {
        const isItemExists = prevItems.some((item) => item.id === id);
        if (!isItemExists) {
          return [...prevItems, { id, image, title, price }];
        }
        return prevItems;
      });
    }
  }, [id, image, title, price]);

  return (
    <div className="flex flex-col gap-y-3 w-[60%] shadow-lg">
      <h1 className="font-bold text-xl ml-8">SHOPPING CART</h1>
      <div className="flex flex-col gap-y-2 w-full pl-8 pr-8 pt-4">
        {cartItems.map((item, index) => (
          <Cartcard
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import CartWish from "./CartWish";

export default function Right({ id, image, title, price }) {

  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedItems = JSON.parse(localStorage.getItem("cartItems"));
      return savedItems ? savedItems : [];
    } catch (error) {
      console.error("Failed to parse cart items from localStorage", error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    if (id !== undefined && id !== null && image && title && price) {
      setCartItems((prevItems) => {
        const isItemExists = prevItems.some((item) => item.id === id);
        if (!isItemExists) {
          return [...prevItems, { id, image, title, price }];
        }
        return prevItems;
      });
    }
  }, [id, image, title, price]);


  function del(id)
  {
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  const updatedCartItems = cartItems.filter(item => item.id !== id);
  localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  setCartItems(updatedCartItems);

  }

  return (
    <div className="flex flex-col gap-y-3 w-[60%] shadow-lg">
      <h1 className="font-bold text-xl ml-8">SHOPPING CART</h1>
      <div className="flex flex-col gap-y-2 w-full pl-8 pr-8 pt-4">
        {cartItems.map((item, index) => (
          <CartWish
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            del={del}
          />
        ))}
      </div>
    </div>
  );
}

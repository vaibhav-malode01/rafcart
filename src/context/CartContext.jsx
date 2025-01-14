import { useState, createContext, useContext } from "react";
import i1 from ".././assets/Images/i1.jpg";
import i2 from ".././assets/Images/i2.jpg";
import i3 from ".././assets/Images/i3.jpg";
import i4 from ".././assets/Images/i4.jpg";

const CartContext = createContext();

export const products = [
  { id: 0, image: i1, title: "GUYER CHAIR", price: 4000, isLike: false },
  { id: 1, image: i2, title: "BED KING SIZE", price: 6000, isLike: false },
  { id: 2, image: i3, title: "COUPLE COFA", price: 8000, isLike: false },
  { id: 3, image: i4, title: "MATRESSX", price: 5000, isLike: false },
];

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [wish, setWish] = useState([]);
  const [productList, setProductList] = useState(products);

  const addToWish = ({ id, image, title, price }) => {
    if (id !== undefined && id !== null) {
      setWish((prevItems) => {
        const isItemExists = prevItems.some((item) => item.id === id);
        if (!isItemExists) {
          return [...prevItems, { id, image, title, price }];
        }
        return prevItems;
      });
    }
    console.log("Item added to wishlist");
  };

  const addToCart = ({ id, image, title, price }) => {
    if (id !== undefined && id !== null) {
      setCart((prevItems) => {
        const isItemExists = prevItems.some((item) => item.id === id);
        if (!isItemExists) {
          return [...prevItems, { id, image, title, price }];
        }
        return prevItems;
      });
    }
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const removeFromWish = (productId) => {
    setWish((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // toggleLike function to update the like state of the product
  const toggleLike = (productId) => {
    setProductList((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, isLike: !product.isLike } // Toggle the isLike state
          : product
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        wish,
        addToWish,
        removeFromWish,
        toggleLike,
        productList, // Make sure to pass the updated product list
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

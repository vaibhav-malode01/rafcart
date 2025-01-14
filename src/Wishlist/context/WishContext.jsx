import { useState, createContext, useContext } from "react";

const WishContext = createContext();

export function WishProvider({ children }) {
  return <CartContext.Provider value={{}}>{children}</CartContext.Provider>;
}

export function useWish() {
  return useContext(WishContext);
}

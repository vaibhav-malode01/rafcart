import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import store from "./redux/Quantity/store.js";
import { Provider } from "react-redux";
import { CartProvider } from "./context/CartContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </CartProvider>
  </StrictMode>
);

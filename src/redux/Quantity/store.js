import { configureStore } from "@reduxjs/toolkit";
import quantityReducer from "./quantitySlice";
const store = configureStore({
  reducer: {
    quantities: quantityReducer,
  },
});

export default store;
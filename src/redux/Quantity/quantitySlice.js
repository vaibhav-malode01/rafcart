import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quantities: [
    { id: 0, value: 1 },
    { id: 1, value: 1 },
    { id: 2, value: 1 },
    { id: 3, value: 1 },
    
  ],
};

const quantitySlice = createSlice({
  name: "quantities",
  initialState,
  reducers: {
    increment: (state, action) => {
      const quantity = state.quantities.find((q) => q.id === action.payload);
      if (quantity) {
        quantity.value += 1;
      }
    },
    decrement: (state, action) => {
      const quantity = state.quantities.find((q) => q.id === action.payload);
      if (quantity) {
        if (quantity.value > 1) {
          quantity.value -= 1;
        }
      }
    },
  },
});

export const { increment, decrement } = quantitySlice.actions;

export default quantitySlice.reducer;
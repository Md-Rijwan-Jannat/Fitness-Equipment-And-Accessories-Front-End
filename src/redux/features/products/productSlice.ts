import { createSlice } from "@reduxjs/toolkit";

export interface TProduct {
  value: number;
}

const initialState: TProduct = {
  value: 0,
};

export const productSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByValue: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByValue } = productSlice.actions;
export default productSlice.reducer;

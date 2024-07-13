// src/redux/slices/productSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TProduct } from "@/types";
import { ProductState } from "@/redux/types";

const initialState: ProductState = {
  product: null,
  status: "idle",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct(state, action: PayloadAction<TProduct>) {
      state.product = action.payload;
    },
  },
});

export const { setProduct } = productSlice.actions;
export default productSlice.reducer;

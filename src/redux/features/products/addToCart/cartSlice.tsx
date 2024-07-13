// src/redux/slices/cartSlice.ts
import { TCartState } from "@/redux/types/cartItemTypes";
import { TProduct } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: TCartState = {
  items: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action: PayloadAction<TProduct>) {
      const existingItem = state.items.find(
        (item) => item._id === action.payload._id
      );
      if (existingItem) {
        if (existingItem.quantity < action.payload.stock) {
          existingItem.quantity += 1;
        }
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.total += action.payload.price;
    },
    removeItemFromCart(state, action: PayloadAction<string>) {
      const existingItem = state.items.find(
        (item) => item._id === action.payload
      );
      if (existingItem) {
        state.total -= existingItem.price * existingItem.quantity;
        state.items = state.items.filter((item) => item._id !== action.payload);
      }
    },
    incrementQuantity(state, action: PayloadAction<string>) {
      const existingItem = state.items.find(
        (item) => item._id === action.payload
      );
      if (existingItem && existingItem.quantity < existingItem.stock) {
        existingItem.quantity += 1;
        state.total += existingItem.price;
      }
    },
    decrementQuantity(state, action: PayloadAction<string>) {
      const existingItem = state.items.find(
        (item) => item._id === action.payload
      );
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
        state.total -= existingItem.price;
      }
    },
    removeAllItemsFromCart(state) {
      state.items = [];
      state.total = 0;
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  incrementQuantity,
  decrementQuantity,
  removeAllItemsFromCart,
} = cartSlice.actions;
export default cartSlice.reducer;

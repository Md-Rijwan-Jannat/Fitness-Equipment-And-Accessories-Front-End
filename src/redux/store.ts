import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/products/productSlice";
import { baseApi } from "./api/baseApi";
import cartReducer from "./features/products/addToCart/cartSlice";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    product: productReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TLimit } from "../types";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ limit = 10 }: TLimit = {}) => ({
        url: `/products`,
        method: "GET",
        params: { limit },
      }),
    }),
  }),
});

export const { useGetProductsQuery } = baseApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TProductQueryParams } from "@/types";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (params: TProductQueryParams) => {
        const query = new URLSearchParams(params as any).toString();
        return {
          url: `/products?${query}`,
          method: "GET",
        };
      },
    }),
    getSingleProduct: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetProductsQuery, useGetSingleProductQuery } = baseApi;

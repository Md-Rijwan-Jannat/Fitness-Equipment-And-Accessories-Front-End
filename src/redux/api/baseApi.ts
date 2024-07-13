import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TProductQueryParams } from "@/types";

export const baseApi = createApi({
  reducerPath: "baseApi",
  tagTypes: ["products", "orders"],
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://fitness-equipment-and-accessories-backend.vercel.app/api/v1",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (params: TProductQueryParams) => {
        const query = new URLSearchParams(params as any).toString();
        return {
          url: `/products?${query}`,
          method: "GET",
        };
      },
      providesTags: ["products"],
    }),
    getProductCategory: builder.query({
      query: () => ({
        url: `/products`,
        method: "GET",
      }),
      providesTags: ["products"],
    }),
    getSingleProduct: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
      providesTags: ["products"],
    }),
    createProduct: builder.mutation({
      query: (product) => {
        return {
          url: `/products/create-product`,
          method: "POST",
          body: product,
        };
      },
      invalidatesTags: ["products"],
    }),
    updateProduct: builder.mutation({
      query: ({ id, product }) => {
        return {
          url: `/products/${id}`,
          method: "PUT",
          body: product,
        };
      },
      invalidatesTags: ["products"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["products"],
    }),
    updateProductsQuantities: builder.mutation({
      query: (updateData) => {
        console.log("this a quantity data=>", updateData);
        return {
          url: `/products/update-products-quantities`,
          method: "PATCH",
          body: updateData,
        };
      },
      invalidatesTags: ["products"],
    }),
    creteOrder: builder.mutation({
      query: (order) => {
        console.log("this is a order=>", order);
        return {
          url: `/orders/create-user-order-details`,
          method: "POST",
          body: order,
        };
      },
      invalidatesTags: ["orders"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductCategoryQuery,
  useGetSingleProductQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useUpdateProductsQuantitiesMutation,
  useCreteOrderMutation,
} = baseApi;

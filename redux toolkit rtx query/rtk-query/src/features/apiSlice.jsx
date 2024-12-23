import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "products",
    }),
  }),
});

// it creates hooks for all of your endpoints query
// inside {} use use and then write your query name
// for example: useGetAllProductsQuery

export const { useGetAllProductsQuery } = apiSlice;

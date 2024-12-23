import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//here we create an api service using createApi from redux toolkit
// now  we have to store the api sercice in the store
export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/",
    tagTypes: ["Post"],
  }),
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      //builder.query is done to make a GET nprequest

      query: () => ({
        url: "posts",
        method: "GET",
      }),
      providesTags: ["Post"],
    }),
    //fetching data based on id from api
    // getPostById: builder.query({
    //   query: (id) => ({
    //     url: `posts/${id}`,
    //     method: "GET",
    //   }),
    // getPostByLimit: builder.query({
    //   query: (num) => ({
    //     url: `posts?_limit=${num}`,
    //     method: "GET",
    //   }),
    // }),
    addPost: builder.mutation({
      mutation: (post) => ({
        url: "/posts",
        method: "POST",
        body: post,
      }),
    }),

    deletePost: builder.mutation({
      mutation: (id) => ({
        url: `posts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Post"],
    }),
  }),
});

export const {
  useGetAllPostsQuery,
  useGetPostByLimitQuery,
  useDeletePostMutation,
  useAddPostMutation,
} = apiSlice;

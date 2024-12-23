import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { apiSlice } from "../services/apiSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),

  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`
});

setupListeners(store.dispatch); // it will enable refetching, polling, and cache invalidation for all endpoints in the store

import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/apiSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

console.log(apiSlice);
const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

setupListeners(store.dispatch);
export default store;

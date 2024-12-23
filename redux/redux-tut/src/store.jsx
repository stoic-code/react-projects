import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./reducer/countSlice";
export const store = configureStore({
  reducer: {
    // count: increment,
    count: countSlice,
  },
});

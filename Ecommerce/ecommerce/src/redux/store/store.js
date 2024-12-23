import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../UserSlice";
import cartReducer from "../cartSlice";

//here you can put any name instead of userReducer and cartReducer but it should be same as the name you have given in the respective files or you can put the name of the file as well eg: userSlice and cartSlice
const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;

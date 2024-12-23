import { createSlice } from "@reduxjs/toolkit";

//note we create slice per feature
// so for cartproducts we have one slice
// for api fetch one another slice
const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      state.push(action.payload); //yeta return garnu pardaina coz just state ma thapeko
    },
    remove(state, action) {
      //yeta return needed coz yeta filter garerw whole new array return gardai xam mathi just tei array ma thapeko so no retun needed
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export default cartSlice.reducer;
export const { add, remove } = cartSlice.actions;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  colorChange: true,
};

export const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    increment: (state) => {
      state.value = state.value + 1;
    },
    //it is afunction these are all reducers function
    decrement: (state) => {
      state.value = state.value - 1;
    },
    changeColor: (state) => {
      state.colorChange = !state.colorChange;
      console.log(state);
    },
  },
});

export const { increment, decrement, changeColor } = countSlice.actions;
export default countSlice.reducer;

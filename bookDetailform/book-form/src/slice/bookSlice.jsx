import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Atomic Habits",
    author: "Markson",
    content:
      "Atomic Habit is All about the tiny daily habit which plays grreat reole in our life",
  },
];

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    bookAdded: (state, action) => {
      state.push(action.payload);
    },
  },
});

export default bookSlice.reducer;
export const { bookAdded } = bookSlice.actions;

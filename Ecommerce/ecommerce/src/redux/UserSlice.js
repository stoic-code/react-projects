import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLoginDetails: (state, action) => {
      console.log(action);
      state.value = action.payload;
    },
    logoutUser: (state) => {
      state.value = null;
      //   localStorage.clear();
      localStorage.removeItem("token");
    },
  },
});

export const { setUserLoginDetails, logoutUser } = userSlice.actions;

export default userSlice.reducer;

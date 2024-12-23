import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
//note we create slice per feature
// so for cartproducts we have one slice
// for api fetch one another slice
const initialState = {
  data: [],
  status: "idle",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // fetchProducts(state,action){
    //     state.data=action.payload
    // }
    // add(state, action) {
    //   state.push(action.payload); //yeta return garnu pardaina coz just state ma thapeko
    // },
    // remove(state, action) {
    //   //yeta return needed coz yeta filter garerw whole new array return gardai xam mathi just tei array ma thapeko so no retun needed
    //   return state.filter((item) => item.id !== action.payload);
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "idle";
      })
      .addCase(getProducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = "error";
      });
  },
});

export default productSlice.reducer;
export const { fetchProducts } = productSlice.actions;

//this is the thunkcreator getprdutcs
export const getProducts = createAsyncThunk("product/getProducts", async () => {
  return axios.get("https://fakestoreapi.com/products").then((res) => res.data);
});

// export function getProducts(){
//     return async function getProductsThunk(dispatch,getstate){

//         dispatch(fetchProducts(data));
//     }
/*
note:  For example, a type argument of 'users/requestStatus' will generate these action types:
 pending: 'users/requestStatus/pending' 
 fulfilled: 'users/requestStatus/fulfilled'
 rejected: 'users/requestStatus/rejected'

*/

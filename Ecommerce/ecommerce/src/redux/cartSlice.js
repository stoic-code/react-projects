import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddCartItem: (state, action) => {
      //   state.cartItems.push(action.payload);
      let oldItems = [...state.cartItems];
      let { _id, name, price, image } = action.payload;

      let matched = oldItems.find((item) => item._id === _id);
      //if tyo item already xa vane matched will be true
      if (matched) {
        oldItems = oldItems.map((item) => {
          if (item._id === _id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        oldItems.push({ _id, name, price, image, quantity: 1 });
      }
      state.cartItems = oldItems;
    },
    IncreseQuantity: (state, action) => {
      let _id = action.payload;
      let oldItems = [...state.cartItems];
      oldItems = oldItems?.map((item) => {
        if (item._id === _id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
      state.cartItems = oldItems;
    },
    DecreaseQuantity: (state, action) => {
      let _id = action.payload;
      let oldItems = [...state.cartItems];
      oldItems = oldItems?.map((item) => {
        if (item._id === _id) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
      state.cartItems = oldItems;
    },
  },
});
export const { AddCartItem, IncreseQuantity, DecreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;

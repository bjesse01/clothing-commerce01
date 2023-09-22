import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      // const existingItem = state.find((item) => item.id === action.payload.id);
      // if (existingItem) {
      //   existingItem.quantity += 1;
      // } else {
      //   state.push({ ...action.payload, quantity: 1 });
      // }
      const newItem = { ...action.payload, key: uuidv4() };
      const existingItem = state.find(
        (item) =>
          item.id === newItem.id &&
          item.size === newItem.size &&
          item.color === newItem.color
      );

      if (existingItem) {
        // If the same product with the same ID exists, increment the quantity
        existingItem.quantity += 1;
      } else {
        // Otherwise, add it as a new item in the cart with initial quantity 1
        newItem.quantity = 1;
        state.push(newItem);
      }
    },

    removeFromCart: (state, action) => {
      const keyToRemove = action.payload;
      return state.filter((item) => item.key !== keyToRemove);
    },

    increaseQuantity: (state, action) => {
      const item = state.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      }
    },

    decreaseQuantity: (state, action) => {
      const item = state.find((item) => item.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;

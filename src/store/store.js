import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const loadCartState = () => {
  try {
    const serializedState = localStorage.getItem("cart");
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (err) {
    return undefined;
  }
};

const saveCartState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("cart", serializedState);
  } catch (err) {
    console.log(err);
  }
};

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: { cart: loadCartState() },
});

store.subscribe(() => {
  saveCartState(store.getState().cart);
});

export default store;

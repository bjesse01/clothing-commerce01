import React from "react";
import CartCards from "../components/CartCards";

export const Cart = () => {
  return (
    <div className="w-full overflow-x-scroll my-4 ">
      <h1 className="text-center my-5 font-semibold text-2xl text-gray-400 tracking-wide">
        Cart Page
      </h1>
      <CartCards />
    </div>
  );
};

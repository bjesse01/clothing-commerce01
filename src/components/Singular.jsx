import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ImageSlider from "./ImageSlider";
// import { useHistory } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const Singular = ({ item }) => {
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  // const history = useHistory();
  const handleGoBack = () => {
    window.history.go(-1); // Go back to the previous page
  };
  const handleAddToCart = () => {
    if (selectedSize || selectedColor) {
      const cartItem = {
        ...item,
        size: selectedSize,
        color: selectedColor,
      };
      dispatch(addToCart(cartItem));
      toast.success(`${item.name} added to cart successfully`, {
        position: "bottom-right",
        autoClose: 500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <div>
      <div className="relative">
        <IoIosArrowBack
          className="text-2xl text-white absolute -top-5 sm:top-3 left-2 cursor-pointer"
          onClick={handleGoBack}
        />
      </div>
      <div className="sm:flex w-full items-center gap-5">
        <div className="flex flex-col justify-center items-center sm:flex-1 mb-8 sm:mb-0">
          <ImageSlider images={item.images} />
        </div>
        <div className="sm:flex-1">
          <div className="flex gap-20 items-center sm:mb-10 mb-5">
            <h1 className="text-3xl font-bold mb-1">{item.name}</h1>
            <p className="text-xl text-gray-100 tracking-wider">
              <span className="semibold">&euro;</span>
              {item.price}
            </p>
          </div>
          <p className="text-xl mb-4 sm:w-[600px] w-full">{item.description}</p>
          {item.sizes && item.sizes.length > 0 ? (
            <div className="flex gap-10 text-lg mb-4">
              <label className="font-semibold text-xl">Sizes Available: </label>
              <select
                className="px-4 outline-none border-solid border-2 font-bold border-black bg-transparent rounded-md"
                onChange={(e) => setSelectedSize(e.target.value)}
                value={selectedSize}
              >
                <option className="font-semibold">Sizes</option>
                {item.sizes.map((size) => (
                  <option key={size} className="font-medium">
                    {size}
                  </option>
                ))}
              </select>
            </div>
          ) : (
            ""
          )}
          {item.colors && item.colors.length > 0 ? (
            <div className="flex gap-7 text-lg mb-7">
              <label className="font-semibold text-xl">
                Colors Available:{" "}
              </label>
              <select
                className="px-4 outline-none border-solid border-2 font-bold border-black bg-transparent rounded-md"
                onChange={(e) => setSelectedColor(e.target.value)}
                value={selectedColor}
              >
                <option className="font-semibold">Colors</option>
                {item.colors.map((color) => (
                  <option key={color} className="font-medium">
                    {color}
                  </option>
                ))}
              </select>
            </div>
          ) : (
            ""
          )}
          <div className="bg-gray-100 w-fit text-center py-1 px-6 border-none outline-none rounded-md cursor-pointer">
            <span onClick={handleAddToCart} className="font-semibold text-base">
              Add To Cart
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singular;

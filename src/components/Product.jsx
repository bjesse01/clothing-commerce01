import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-modal";

Modal.setAppElement("#root");

const Product = ({ data }) => {
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddToCart = () => {
    if (selectedSize || selectedColor) {
      const cartItem = {
        ...data,
        size: selectedSize,
        color: selectedColor,
      };
      dispatch(addToCart(cartItem));
      closeModal();
      toast.success(`${data.name} added to cart successfully`, {
        position: "bottom-right",
        autoClose: 500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  // const handleAddToCart = () => {
  //   dispatch(addToCart(data));
  //   toast.success(`${data.name} added to cart successfully`, {
  //     position: "bottom-right",
  //     autoClose: 500,
  //     hideProgressBar: true,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //   });
  // };

  return (
    <div key={data.id} className="sm:h-fit h-[200px]">
      <Link to={`product/${data.id}`}>
        <img
          src={data.images[0]}
          className="sm:h-[300px] h-[140px] sm:w-[250px] w-[230px] rounded-xl"
          alt="imgs"
        />
      </Link>
      <div className="flex flex-col px-2 py-2">
        <div className="flex justify-between items-center">
          <Link to={`product/${data.id}`}>
            <h2 className="font-bold sm:text-xl text-xs">{data.name}</h2>
          </Link>
          <div className="sm:text-xl text-lg text-right">
            <HiShoppingCart onClick={openModal} className="cursor-pointer" />
          </div>
        </div>
        <p className="sm:text-sm text-xs text-gray-500">
          <span className="font-medium ">&euro;</span>
          {data.price}
        </p>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Size and Color Selection"
        className="sm:w-[550px] w-full sm:h-[300px] h-[350px] absolute bottom-0 sm:left-1/3 bg-gray-300 px-10 py-12 rounded-t-xl outline-none"
      >
        <h2 className="text-center mb-10 font-bold text-2xl">
          Select Size and Color
        </h2>
        <div className="sm:flex sm:justify-around items-center mb-10">
          {data.sizes ? (
            <div className="flex gap-3 sm:mb-0 mb-6">
              <label className="font-semibold text-xl">Select Size: </label>
              <select
                className="outline-none px-3 py-1 rounded-md font-semibold"
                onChange={(e) => setSelectedSize(e.target.value)}
                value={selectedSize}
              >
                <option value="null" className="font-semibold text-lg">
                  Sizes
                </option>
                {data.sizes &&
                  data.sizes.map((size) => (
                    <option
                      key={size}
                      value={size}
                      className="font-semibold sm:text-lg text-base"
                    >
                      {size}
                    </option>
                  ))}
              </select>
            </div>
          ) : (
            ""
          )}
          {data.colors ? (
            <div className="flex gap-3">
              <label className="font-semibold text-xl">Select Color: </label>
              <select
                className="outline-none px-3 py-1 rounded-md font-semibold"
                onChange={(e) => setSelectedColor(e.target.value)}
                value={selectedColor}
              >
                <option value="null" className="font-semibold text-lg">
                  Colors
                </option>
                {data.colors.map((color) => (
                  <option
                    key={color}
                    value={color}
                    className="font-semibold sm:text-lg text-base"
                  >
                    {color}
                  </option>
                ))}
              </select>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="flex justify-center items-center">
          <button
            onClick={handleAddToCart}
            className="bg-gray-700 text-white font-bold tracking-widest text-center py-1 px-10 rounded-md shadow-lg"
          >
            Add to Cart
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Product;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../store/cartSlice";
import { AiOutlineClose } from "react-icons/ai";

const CartCards = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (key) => {
    dispatch(removeFromCart(key));
  };

  const handleIncrease = (item) => {
    dispatch(increaseQuantity(item));
  };

  const handleDecrease = (item) => {
    dispatch(decreaseQuantity(item));
  };

  const calcTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const singleTotal = (amount, quantity) => {
    return amount * quantity;
  };

  return (
    <div className="w-full sm:px-5">
      <div className=" overflow-x-scroll">
        <table className="min-w-full divide-y divide-gray-200 table-fixed mb-4">
          <thead className="bg-gray-100 dart:text-white dark:bg-gray-700">
            <tr>
              <th scope="col" className="sm:p-4"></th>
              <th
                scope="col"
                className="sm:py-4 py-2 sm:px-4 px-2 sm:text-lg text-base font-medium tracking-wider text-left text-gray-700 uppercase dark:text-white"
              >
                Product
              </th>
              <th
                scope="col"
                className="sm:py-4 py-2 sm:px-6 px-10 sm:text-lg text-center text-base font-medium tracking-wider text-gray-700 uppercase dark:text-white"
              >
                Size
              </th>
              <th
                scope="col"
                className="sm:py-4 py-2 sm:px-6 px-2 sm:text-lg text-base font-medium tracking-wider text-center text-gray-700 uppercase dark:text-white"
              >
                Price
              </th>
              <th
                scope="col"
                className="sm:py-4 py-2 sm:px-6 px-2 sm:text-lg text-base font-medium tracking-wider text-center text-gray-700 uppercase dark:text-white"
              >
                Color
              </th>
              <th
                scope="col"
                className="sm:py-4 py-2 sm:px-6 px-2 sm:text-lg text-base font-medium tracking-wider text-center text-gray-700 uppercase dark:text-white"
              >
                Quantity
              </th>
              <th
                scope="col"
                className="sm:py-4 py-2 sm:px-6 px-2 sm:text-lg text-base font-medium tracking-wider text-center text-gray-700 uppercase dark:text-white"
              >
                Total
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-dashed divide-gray-200 dark:divide-gray-700">
            {cartItems &&
              cartItems.map((item) => (
                <tr key={item.key} className="hover:bg-gray-200">
                  <td>
                    <div
                      onClick={() => handleRemove(item.key)}
                      className="flex items-center justify-center text-lg cursor-pointer"
                    >
                      <AiOutlineClose />
                    </div>
                  </td>
                  <td className="flex items-center py-4 px-6 text-sm font-medium text-black whitespace-nowrap ">
                    <img
                      src={item.images[0]}
                      className="h-12 w-12 sm:pl-2 rounded-md"
                      alt="img"
                    />
                    <h3 className="font-semibold sm:pl-5 pl-2 text-lg">
                      {item.name}
                    </h3>
                  </td>
                  <td className="py-4 px-6 text-sm text-center font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.size ? (
                      <p className="text-gray-400">{item.size}</p>
                    ) : (
                      <p>-</p>
                    )}
                  </td>
                  <td className="py-4 px-6 text-sm text-center font-medium text-gray-900 whitespace-nowrap">
                    <p className="text-gray-400">
                      <span className="font-medium">&euro;</span>
                      {item.price}
                    </p>
                  </td>
                  <td className="py-4 px-6 text-sm text-center font-medium text-gray-900 whitespace-nowrap ">
                    {item.color ? (
                      <p className="text-gray-400">{item.color}</p>
                    ) : (
                      <p>-</p>
                    )}
                  </td>
                  <td className="flex px-7 text-sm items-center justify-center font-medium text-gray-900 whitespace-nowrap">
                    <button
                      onClick={() => handleDecrease(item)}
                      className="border-gray-500 border-2 w-[25px] flex items-center justify-center cursor-pointer"
                    >
                      -
                    </button>
                    <div className=" text-black w-[35px] flex items-center justify-center">
                      {item.quantity}
                    </div>
                    <button
                      onClick={() => handleIncrease(item)}
                      className="border-gray-500 border-2 w-[25px] flex items-center justify-center cursor-pointer"
                    >
                      +
                    </button>
                  </td>
                  <td className="py-4 px-6 text-sm text-center font-medium text-gray-900 whitespace-nowrap">
                    <p>&euro; {singleTotal(item.price, item.quantity)} </p>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="shadow-lg border border-line border-1 border-gray-300 my-7 sm:py-7 py-3 sm:px-16 px-3 rounded-md">
        {/* <h3>Cart Total</h3>
        <p>Total Price: {calcTotalPrice()}</p> */}
        <h3 className="uppercase font-bold sm:text-xl text-lg tracking-wide">
          Cart Total
        </h3>
        <div className="flex items-center my-5">
          <h4 className="font-semibold sm:text-lg text-base sm:mr-44 mr-10">
            Subtotal:
          </h4>
          <p className="font-lg font-medium text-base">
            &euro;{calcTotalPrice()}
          </p>
        </div>
        <div className="flex my-5 sm:flex-row flex-col">
          <h4 className="font-semibold sm:text-lg text-base sm:mr-44">
            Shipping:
          </h4>
          <div>
            <p className="sm:text-base text-sm mt-2 w-full font-normal">
              There are no shipping method available. Please double check your
              address or contact us if you need any help. <br />
              <b className="font-semibold">Disclaimer:</b> Please note this site
              is only users in Enugu, Lagos, Anambra, Abia, Rivers and Imo
              State. For more information please contact us with the
              informations provided other our contact page. <br /> You can enter
              your address or select if your want to pick your goods up at our
              store with your proof of payment.
            </p>
            <div className="pt-3">
              <h5 className="font-semibold sm:text-lg text-base">
                CALCULATE SHIPPING
              </h5>
              <div className="my-3">
                <label className="text-base font-semibold tracking-normal mr-10">
                  Select State:
                </label>
                <select className="border-black border-2 rounded-md w-[130px] sm:p-1 text-base tracking-wide outline-none">
                  <option value="abia">Abia</option>
                  <option value="anambra">Anambra</option>
                  <option value="enugu">Enugu</option>
                  <option value="imo">Imo</option>
                  <option value="lagos">Lagos</option>
                </select>
              </div>
              <div className="">
                <input
                  type="text"
                  placeholder="Enter Address"
                  style={{ borderBottom: "2px solid gray" }}
                  className="w-full outline-none p-1 text-base placeholder:font-semibold placeholder:tracking-wider"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center my-5">
          <h4 className="font-semibold sm:text-lg text-base sm:mr-7 -mr-24">
            Total:
          </h4>
          <p className="font-lg ml-44 font-medium text-base">
            &euro;{calcTotalPrice()}
          </p>
        </div>

        <div className="w-full bg-black text-white rounded-full p-1 mt-3">
          <p className="font-semibold text-center sm:text-lg text-base uppercase">
            Proceed To Checkout
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartCards;

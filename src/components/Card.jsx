import React from "react";
import { MdLocalPhone, MdLocationOn, MdMail } from "react-icons/md";

const Card = () => {
  return (
    <div className="flex p-3 sm:flex-row flex-col">
      <div className="flex-1 border-solid border-2 border-gray-200">
        <form className="flex flex-col items-center justify-center mx-4 my-10 font-medium">
          <h1 className="text-3xl mb-3">Send Us A Message</h1>
          <input
            className="w-full border-gray-200 border-solid border-2 outline-none mx-3 px-4 my-3 p-1 rounded-md tracking-wider"
            type="email"
            placeholder="Your Email Address"
          />
          <textarea
            className="w-full border-gray-200 border-solid border-2 outline-none mx-4 my-3 rounded-md p-2 tracking-wider"
            cols="30"
            rows="10"
            placeholder="How Can We Help?"
          ></textarea>
          <input
            type="button"
            value="submit"
            className="w-full bg-black text-white rounded-3xl py-2 uppercase mt-3"
          />
        </form>
      </div>
      <div className="flex-1 p-8 border-solid border-2 border-gray-200 flex item-center justify-center flex-col">
        <div className="flex my-10">
          <MdLocationOn className="text-2xl" />
          <div className="ml-5">
            <h1 className="font-semibold text-lg">Address</h1>
            <div className="mt-4 w-[270px] text-gray-500">
              <p>
                Coza Store Center 8th floor, 379 Hudson St, New York , NY 10018
                US
              </p>
            </div>
          </div>
        </div>
        <div className="flex my-10">
          <MdLocalPhone className="text-2xl" />
          <div className="ml-5">
            <h1 className="font-semibold text-lg">Lets Talk</h1>
            <div className="mt-4 w-[270px] text-blue-700">
              <p>
                <a href="foo">+1 800 1236879</a>
              </p>
            </div>
          </div>
        </div>
        <div className="flex my-10">
          <MdMail className="text-2xl" />
          <div className="ml-5">
            <h1 className="font-semibold text-lg">Sale Support</h1>
            <div className="mt-4 w-[270px] text-blue-700">
              <p>
                <a href="foo">contact@example.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

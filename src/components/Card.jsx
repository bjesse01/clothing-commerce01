import React, { useState } from "react";
import axios from "axios";
import { MdLocalPhone, MdLocationOn, MdMail, MdWhatsapp } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Card = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://myserver-twng.onrender.com/sendEmail",
        formData
      );

      if (response.status === 200) {
        toast.success("Message sent successfully!", {
          position: "top-right",
          autoClose: 3000,
        });
        setFormData({
          email: "",
          message: "",
        });
      }
      // else {
      //   const errorData = await response.json();
      //   toast.error(errorData.error || "Failed to send message", {
      //     position: "top-right",
      //     autoClose: 3000,
      //   });
      // }
    } catch (error) {
      console.error("Error sending email: ", error);
      toast.error("Failed to send message", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="flex p-3 sm:flex-row flex-col">
      <div className="flex-1 border-solid border-2 border-gray-200">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center mx-4 my-10 font-medium"
        >
          <h1 className="text-3xl mb-3">Send Us A Message</h1>
          <input
            className="w-full border-gray-200 border-solid border-2 outline-none mx-3 px-4 my-3 p-1 rounded-md tracking-wider"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your Email Address"
          />
          <textarea
            className="w-full border-gray-200 border-solid border-2 outline-none mx-4 my-3 rounded-md p-2 tracking-wider"
            cols="30"
            rows="10"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="How Can We Help?"
          ></textarea>
          <input
            type="submit"
            value="submit"
            className="w-full bg-black text-white rounded-3xl py-2 uppercase mt-3 cursor-pointer"
          />
        </form>
        <ToastContainer />
      </div>
      <div className="flex-1 p-8 border-solid border-2 border-gray-200 flex item-center justify-center flex-col">
        <div className="flex my-7">
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
        <div className="flex my-7">
          <MdLocalPhone className="text-2xl" />
          <div className="ml-5">
            <h1 className="font-semibold text-lg">Lets Talk</h1>
            <div className="mt-4 w-[270px] text-blue-700">
              <p>
                <a href="tel:+2349035528300">+234 903 552 8300</a>
              </p>
            </div>
          </div>
        </div>
        <div className="flex my-7">
          <MdWhatsapp className="text-2xl" />
          <div className="ml-5">
            <h1 className="font-semibold text-lg">Lets Chat</h1>
            <div className="mt-4 w-[270px] text-blue-700">
              <p>
                <a href="https://api.whatsapp.com/send?phone=09035528300">
                  +234 903 552 8300
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="flex my-7">
          <MdMail className="text-2xl" />
          <div className="ml-5">
            <h1 className="font-semibold text-lg">Sale Support</h1>
            <div className="mt-4 w-[270px] text-blue-700">
              <p>
                <a href="mailto:bernardsonj01@gmail.com">
                  bernardsonj01@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { HiShoppingCart } from "react-icons/hi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  let [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const cartItems = useSelector((state) => state.cart);
  const totalCartItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="shadow-md w-full sticky top-0 left-0 z-50">
      <div className="md:flex items-center justify-between bg-white py-3 md:px-20 px-7">
        <div className="font-600 text-2xl cursor-pointer flex items-center text-gray-600">
          <span className="text-black font-bold">my</span>BRAND
        </div>

        <div className="flex items-center">
          <div className="relative ">
            <Link to="/cart">
              <HiShoppingCart className=" sm:static sm:mr-5 sm:mt-1 absolute sm:right-20 sm:left-0 sm:bottom-0 left-60 bottom-0 sm:top-5 text-2xl" />
              {totalCartItems > 0 && (
                <span className="absolute sm:top-0 sm:right-4 sm:left-0 sm:bottom-0 left-64 bottom-4 bg-red-500 rounded-full w-4 h-4 flex items-center justify-center text-white text-xs">
                  {totalCartItems}
                </span>
              )}
            </Link>
          </div>

          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-4 cursor-pointer md:hidden"
          >
            {open ? <AiOutlineClose /> : <AiOutlineMenu />}
          </div>

          <ul
            className={`md:flex md:items-center md:pb-0 pb-7 absolute  md:static sm:bg-transparent bg-white md:z-auto z-[-1] left-0 top-12 w-full md:w-auto md:pl-0 pl-3 transition-all duration-500 ease-in ${
              open ? "top-10 opacity-100" : "top-[-490px]"
            } md:opacity-100 opacity-0 `}
          >
            {Links.map((link) => (
              <li key={link.name} className="md:ml-1 text-xl md:my-0 m-7 mb-1">
                {/* <div className="pr-2">{link.icon}</div> */}
                <a
                  href={link.link}
                  className={`text-gray-800 hover:text-gray-400 duration-500 ${
                    activeLink === link.name ? "font-bold" : ""
                  }`}
                  onClick={() => handleLinkClick(link.name)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

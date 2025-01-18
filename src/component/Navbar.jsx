import React, { useState } from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { RiMenu4Line } from "react-icons/ri";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
        <div className="w-full px-4 sm:px-14 flex justify-between py-3 z-50 relative bg-white">
        {/* Logo Section */}
        <div>
          <NavLink to="/">
            <img className="w-2/5 sm:w-1/5" src={logo} alt="Logo" />
          </NavLink>
        </div>

        {/* Desktop Menu */}
        <div className="hidden sm:grid place-content-center">
          <ul className="flex gap-6">
            <li className="mx-2 cursor-pointer">
              <p className="font-semibold">+91-8420204635</p>
            </li>
            <li className="mx-2 cursor-pointer">
              <NavLink className="bg-pink-600 text-white font-semibold p-2 rounded-lg" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Icon */}
        <div className="text-3xl md:hidden cursor-pointer" onClick={toggleMenu}>
          <RiMenu4Line />
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="bg-gray-100 p-8 md:hidden">
          <ul className="flex flex-col gap-4">
            <li>
              <p className="cursor-pointer text-black">+91-8420204635</p>
            </li>
            <li>
              <NavLink className="bg-pink-600 text-white font-semibold p-2 rounded-lg block text-center" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;

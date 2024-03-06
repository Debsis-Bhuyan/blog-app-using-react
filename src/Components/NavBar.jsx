import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaDribbble, FaFacebook, FaTwitter } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import Model from "./Model";
export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const toggoleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const openModel = () => {
    setIsModelOpen(true);
  };
  const closeModel = () => {
    setIsModelOpen(false);
  };

  return (
    <>
      <header className="bg-black text-white  fixed left-0 top-0 right-0">
        <nav className="px-5 py-5 mx-auto flex justify-between items-center">
          <NavLink className="text-xl font-bold text-white" to="/">
            Blog <span className="text-orange-500"> app</span>
          </NavLink>

          <ul className="md:flex gap-12 text-lg hidden">
            <li className="text-white">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li className="text-white">
              <NavLink
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
                to="/blogs"
              >
                Blog
              </NavLink>
            </li>
            <li className="text-white">
              <NavLink
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
                to="/services"
              >
                Services
              </NavLink>
            </li>
            <li className="text-white">
              <NavLink
                to="/contact"
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
              >
                Contact
              </NavLink>
            </li>
            <li className="text-white">
              <NavLink
                to="/about"
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
              >
                About
              </NavLink>
            </li>
          </ul>
          {/* // menu icons */}
          <div className=" text-white lg:flex gap-4 items-center hidden">
            <a href="/" className="hover:text-orange-500 ">
              <FaFacebook />
            </a>
            <a href="/" className="hover:text-orange-500">
              <FaDribbble />
            </a>
            <a href="/" className="hover:text-orange-500">
              <FaTwitter />
            </a>
            <button
              onClick={openModel}
              className="bg-orange-500 px-6 rounded hover:bg-white transition-all ease-in hover:text-orange-500 py-2 font-medium"
            >
              Login
            </button>
          </div>

          <Model isOpen={isModelOpen} onClose={closeModel} />

          <div className="md:hidden">
            <button onClick={toggoleMenu} className="cursor-pointer">
              {isMenuOpen ? (
                <FaXmark className="w-5 h-5" />
              ) : (
                <FaBars className="w-5 h-5" />
              )}
            </button>
          </div>
        </nav>
        <div>
          <ul
            className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-4 mt-16 bg-white ${
              isMenuOpen
                ? "fixed top-0 left-0 w-full transition-all ease-out duration-150"
                : "hidden"
            }`}
          >
            <li className="text-black">
              <NavLink to="/" onClick={toggoleMenu}>
                Home
              </NavLink>
            </li>
            <li className="text-black">
              <NavLink to="/blogs" onClick={toggoleMenu}>
                Blog
              </NavLink>
            </li>
            <li className="text-black">
              <NavLink to="/services" onClick={toggoleMenu}>
                Services
              </NavLink>
            </li>
            <li className="text-black">
              <NavLink to="/contact" onClick={toggoleMenu}>
                Contact
              </NavLink>
            </li>
            <li className="text-black">
              <NavLink to="/about" onClick={toggoleMenu}>
                About
              </NavLink>
            </li>
            <li className=" text-black" onClick={toggoleMenu}>

            <button
              onClick={openModel} 
              className="bg-orange-500 px-6 rounded hover:bg-white transition-all ease-in hover:text-orange-500 py-2 font-medium"
            >
              Login
            </button>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

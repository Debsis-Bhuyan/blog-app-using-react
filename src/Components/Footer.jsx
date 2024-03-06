import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoDocumentText } from "react-icons/io5";

export default function Footer() {
  return (
    <div className="bg-gray-900 ">
      <div className="px-4 pt-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4">
        <div className="grid mb-6 lg:grid-cols-2 mx-auto   ">
          <div className="grid grid-cols-2 gap-5 lg:col-span-2 md:grid-cols-2">
            <div>
              <p className="font-medium tracking-wide text-gray-300 ">
                Category
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link
                    to="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blogs"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Services
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium tracking-wide text-gray-300 ">
                Social Media
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-gray-600 flex transition-all duration-300 hover:text-teal-400"
                  >
                    {" "}
                    <FaLinkedin className="h-6 w-6" /> Linkedin
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-600 flex transition-all duration-300 hover:text-teal-400"
                  >
                    <FaGithub className="h-6 w-6" /> Github
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-600 flex transition-all duration-300 hover:text-teal-400"
                  >
                    <FaInstagram className="h-6 w-6" /> Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-600 flex transition-all duration-300 hover:text-teal-400"
                  >
                    {" "}
                    <IoDocumentText className="h-6 w-6" /> Portfolio
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex  justify-center items-center pt-3 pb-5 border-gray-800 sm:flex-row ">
          <p className="text-sm text-gray-600">Copyright @Debasis Bhuyan</p>
        </div>
      </div>
    </div>
  );
}

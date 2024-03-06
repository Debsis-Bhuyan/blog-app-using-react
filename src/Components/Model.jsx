import React from "react";

function Model({ isOpen, onClose }) {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full items-center flex justify-center ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="modal-container">
        <div className="bg-indigo-700  text-center p-5 h-96 lg:w-[500px] rounded shadow-md">
          <h2 className="text-xl font-semibold  mt-6 mb-5 uppercase">
            Please Login here
          </h2>
          <form action="" className="px-4 ">
            <div className="mb-5">
              <input
                type="email"
                id="email"
                placeholder="example@gmail.com"
                className="w-full rounded-md border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#687280] outline-none focus:border-[#6a64f1] focus:shadow-md "
              />
            </div>
            <div className="mb-5">
              <input
                type="text"
                id="name"
                placeholder="Enter name"
                className="w-full rounded-md border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#687280] outline-none focus:border-[#6a64f1] focus:shadow-md "
              />
            </div>
            <div>
              <button className="hover:shadow-md rounded-md bg-[#6a64f1] hover:bg-orange-600 py-3 px-8 text-base text-white outline-none">
                Login
              </button>
            </div>
          </form>
          <button
            onClick={onClose}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-6 rounded inline-flex items-center mt-5"
          >
            close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Model;

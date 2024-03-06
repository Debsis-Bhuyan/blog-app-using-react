import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

function Banner() {
  return (
    <div className="px-4 py-32 bg-black mx-auto">
      <div className="text-white text-center">
        <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-3">
          Welcome to our Blog
        </h1>
        <p className="text-gray-100 lg:w-3/5 mx-auto mb-5 text-primary">Start your blog today and join a community of writers and readers who are passionate about sharing theier stories and ideas. We offer Everything you need to get started from helful tips and tutorials. </p>
        <div>
          <Link to='/blogs' className="font-medium hover:text-orange-500 inline-flex items-center">Learn more <FaArrowRight/></Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;

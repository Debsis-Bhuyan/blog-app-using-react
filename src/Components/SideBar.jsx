import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function SideBar() {
  const [popularBlogs, setPopularBlogs] = useState([]);

  useEffect(() => {
    fetch("https://blog-server-code.onrender.com/api/blogs")
      .then((res) => res.json())
      .then((data) => setPopularBlogs(data));
  }, []);

  return (
    <div>
      <div>
        <h2 className="text-2xl font-semibold px-4">Latest Blogs</h2>
        <div>
          {popularBlogs.slice(0, 5).map((blog) => (
            <div
              key={blog.id}
              className="my-5 border-b-2 border-spacing-2 px-4"
            >
              <h4 className="font-medium mb-2">{blog.title}</h4>
              <Link
                to={`/blogs/${blog.id}`}
                className="text-base mb-2 hover:text-orange-500 inline-flex items-center"
              >
                Read more <FaArrowRight className="mt-1 ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold px-4 mt-20">Popular Blogs</h2>
        <div>
          {popularBlogs.slice(5, 10).map((blog) => (
            <div
              key={blog.id}
              className="my-5 border-b-2 border-spacing-2 px-4"
            >
              <h4 className="font-medium mb-2">{blog.title}</h4>
              <Link
                to={`/blogs/${blog.id}`}
                className="text-base mb-2 hover:text-orange-500 inline-flex items-center"
              >
                Read more <FaArrowRight className="mt-1 ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SideBar;

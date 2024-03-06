import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { useParams } from "react-router-dom";
import SideBar from "../Components/SideBar";
// import { useParams } from "react-router-dom";

function BlogDetailsPage() {
  const { id } = useParams();
  const [blog, setBlog] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/blog/${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setBlog(data[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the fetchData function when the component mounts
  }, [id]);

  return (
    <div>
      {/* <div className="py-40 bg-black text-center text-white px-4">
        <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-3">
          SIngle Blog Page
        </h1>
      </div> */}
      <div className=" pt-16 flex mx-auto flex-col my-12 lg:flex-row gap-12 max-w-6xl">
        <div className="lg:w-3/4 mx-auto">
          <div>
            <img
              src={blog.image}
              alt="blogData"
              className="w-full mx-auto rounded"
            />
          </div>
          <h2 className="'text-3xl font-bold mt-8 mb-4 text-blue-500 cursor-pointer">
            {blog.title}
          </h2>
          <p className="mb-3 text-gray-600">
            <FaUser className="inline-flex items-center mr-2 " />
            {blog.author} | {blog.published_date}
          </p>
          <p className="mb-3 text-gray-600">
            <FaUser className="inline-flex items-center mr-2 " />
            {blog.reading_time}
          </p>
          <p className="text-base text-gray-500 mb-6">{blog.content}</p>
          <div className="text-base text-gray-500 ">
            <p className="">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio adipisci, unde suscipit qui obcaecati commodi, minima
              corrupti voluptatum voluptates magni sunt, laboriosam minus.
              Consequuntur laudantium alias tempora culpa illo minima!
            </p>
            <br />
            <p className="">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio adipisci, unde suscipit qui obcaecati commodi, minima
              corrupti voluptatum voluptates magni sunt, laboriosam minus.
              Consequuntur laudantium alias tempora culpa illo minima!
            </p>
            <br />
            <p className="">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio adipisci, unde suscipit qui obcaecati commodi, minima
              corrupti voluptatum voluptates magni sunt, laboriosam minus.
              Consequuntur laudantium alias tempora culpa illo minima!
            </p>
            <br />
            <p className="">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio adipisci, unde suscipit qui obcaecati commodi, minima
              corrupti voluptatum voluptates magni sunt, laboriosam minus.
              Consequuntur laudantium alias tempora culpa illo minima!
            </p>
            <br />
            <p className="">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio adipisci, unde suscipit qui obcaecati commodi, minima
              corrupti voluptatum voluptates magni sunt, laboriosam minus.
              Consequuntur laudantium alias tempora culpa illo minima!
            </p>
            <br />
            <p className="">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio adipisci, unde suscipit qui obcaecati commodi, minima
              corrupti voluptatum voluptates magni sunt, laboriosam minus.
              Consequuntur laudantium alias tempora culpa illo minima!
            </p>
            <br />
          </div>
        </div>
        <div className=" lg:w-1/4">
          <SideBar />
        </div>
      </div>
    </div>
  );
}

export default BlogDetailsPage;

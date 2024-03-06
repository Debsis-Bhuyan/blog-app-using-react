import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import Pagination from "./Pagination";
import PageCategory from "./PageCategory";
import SideBar from "./SideBar";
function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const PageSize = 12;
  const [selectedCategory, setSelectCategory] = useState(null);
  const [activeCategorry, setActiveCategory] = useState(null);
  useEffect(() => {
    async function fetchBlogs() {
      let url = `http://localhost:5000/api/blogs?page=${currentPage}&limit=${PageSize}`;

      if (selectedCategory) {
        url += `&category=${selectedCategory}`;
      }
      const response = await fetch(url);
      const data = await response.json();

      setBlogs(data);
    }
    fetchBlogs();
  }, [currentPage, PageSize, selectedCategory]);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const handleCategory = (category) => {
    setSelectCategory(category);
    setCurrentPage(1);
    setActiveCategory(category);
  };

  return (
    <div>
      <div className="mx-auto pl-6 pr-4 ">
        <PageCategory
          onSelectCategory={handleCategory}
          selectedCategory={selectedCategory}
          activeCategorry={activeCategorry}
        />
      </div>
      <div className="mx-auto pl-4 pr-4 flex flex-col lg:flex-row gap-12">
        <BlogCard
          blogs={blogs}
          currentPage={currentPage}
          selectedCategory={selectedCategory}
          PageSize={PageSize}
        />
        <div>
          <SideBar />
        </div>
      </div>
      {/* <div>
        <Pagination
          onPageChange={handlePageChange}
          currentPage={currentPage}
          blogs={blogs}
          PageSize={PageSize}
        />
      </div> */}
    </div>
  );
}

export default BlogPage;

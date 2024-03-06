import React from "react";

function PageCategory({ onSelectCategory, activeCategorry, selectedCategory }) {
  const categories = ["Startups", "Security", "AI", "Apps", "Tech"];
  return (
    <div  className=" mx-auto px-4 mb-8 lg:space-x-16 flex-wrap items-center border-b-2 py-5 text-gray-800">
      <button
        onClick={() => onSelectCategory(null)}
        className={`mr-2 space-x-16 ${
          activeCategorry === null ? "active-button" : ""
        }`}
      >
        All
      </button>
      {categories.map((category, index) => (
        <button
          onClick={() => onSelectCategory(category)}
          className={`mr-2 space-x-16 ${
            activeCategorry === category ? "active-button" : ""
          }`}
          key={index}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default PageCategory;

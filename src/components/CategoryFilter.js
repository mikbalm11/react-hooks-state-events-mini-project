import React, { useState } from "react";

function CategoryFilter({ categories, onCategoryChange }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleClick(category) {
    setSelectedCategory(category);
    onCategoryChange(category);
  }

  const categoryButtons = categories.map(category => (
    <button
      key={category}
      className={category === selectedCategory ? "selected" : ""}
      onClick={() => handleClick(category)}
    >
      {category}
    </button>
  ));

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;

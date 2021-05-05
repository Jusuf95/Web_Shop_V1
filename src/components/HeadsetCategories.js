import React from 'react';

const HeadsetCategories = ({ categories2, filterItems }) => {
  return (
    <div className="btn-container">
      {categories2.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default HeadsetCategories;

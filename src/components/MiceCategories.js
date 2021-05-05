import React from 'react';

const MiceCategories = ({ categories1, filterItems }) => {
  return (
    <div className="btn-container">
      {categories1.map((category, index) => {
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

export default MiceCategories;

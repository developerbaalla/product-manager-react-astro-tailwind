// src/components/FilterSort.js
import React, { useState } from 'react';

const FilterSort = ({ filterProducts, sortProducts }) => {

  const handleFilter = (value) => {
    // Implement filtering logic based on name
    filterProducts(value);
  };

  const handleSort = e => {
    // Implement sorting logic based on order (asc or desc)
    sortProducts(e.target.value);
  };

  return (
    <div className="mb-8 flex flex-col md:flex-row p-4 border border-neutral-400 rounded-md bg-white text-black">
      {/* Filter by Name */}
      <div className="mb-4 md:mr-4">
        <label className="block text-sm font-semibold mb-2">Filter by Name:</label>
        <input
            type="text"
            onChange={e => handleFilter(e.target.value)}
            className="border p-2 mb-4"
        />
      </div>

      {/* Sort by Name */}
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">Sort by Name:</label>
        <select
            onChange={handleSort}
            className="border p-2"
        >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSort;

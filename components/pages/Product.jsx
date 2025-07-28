import React from 'react';
import { IoFilter } from "react-icons/io5";
import { Link } from 'react-router'; 

const Product = () => {
  const categories = [
    'T-Shirts', 'Shirts', 'Drop Shoulders', 'Skirts', 'Pajamas', 
    'Formal Pants', 'Hoodies', 'Jackets', 'Shorts', 'Jeans', 
    'Tracksuits', 'Blazers', 'Kurta', 'Sweaters', 'Tank Tops'
  ];

  return (
    <div className="container mx-auto p-4">
      <section>
        <h1 className="text-xl font-semibold mb-4">Products Offered by Suppliers</h1>

        {/* Header with filter */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-lg font-medium">Product List</p>

          <div className="flex items-center gap-2">
            <IoFilter className="text-xl" />
            <span className="font-medium">Filter</span>
          </div>
        </div>

        {/* Category Tags */}
        <div className="flex flex-wrap gap-3 mb-6">
          {categories.map((category, index) => (
            <button
              key={index}
              className="border border-gray-300 px-3 py-1 rounded-full text-sm hover:bg-gray-100 transition"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Example Product Button */}
        <button className="border px-4 py-2 rounded hover:bg-gray-100 transition">
          <Link to="/ip">Product 1</Link>
        </button>
      </section>
    </div>
  );
};

export default Product;

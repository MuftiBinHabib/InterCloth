import React, { useState } from 'react';
import { IoFilter } from "react-icons/io5";
import { Link } from 'react-router';  

const Product = () => {
  const categories = [
    'T-Shirts', 'Shirts', 'Drop Shoulders', 'Skirts', 'Pajamas', 
    'Formal Pants', 'Hoodies', 'Jackets', 'Shorts', 'Jeans', 
    'Tracksuits', 'Blazers', 'Kurta', 'Sweaters', 'Tank Tops'
  ];

  const products = [
    { id: 1, name: 'Casual T-Shirt', price: 1200, image: '/images/tshirt1.jpg', popular: 15 },
    { id: 2, name: 'Formal Shirt', price: 2000, image: '/images/shirt1.jpg', popular: 40 },
    { id: 3, name: 'Hoodie', price: 2500, image: '/images/hoodie1.jpg', popular: 25 },
    { id: 4, name: 'Jeans', price: 3000, image: '/images/jeans1.jpg', popular: 35 },
    { id: 5, name: 'Kurta', price: 1800, image: '/images/kurta1.jpg', popular: 10 },
    { id: 6, name: 'Sweater', price: 2200, image: '/images/sweater1.jpg', popular: 30 },
  ];

  const [sortOption, setSortOption] = useState('Newest');

  const sortedProducts = [...products].sort((a, b) => {
    if (sortOption === 'Price') return a.price - b.price;
    if (sortOption === 'Popular') return b.popular - a.popular;
    return b.id - a.id; // Newest by id desc
  });

  return (
    <div className="container mx-auto p-4">
      <section>
        <h1 className="text-xl font-semibold mb-4">Products Offered by Suppliers</h1>

        <div className="flex justify-between items-center mb-6">
          <p className="text-lg font-medium">Product List</p>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <IoFilter className="text-xl" />
              <span className="font-medium">Filter</span>
            </div>

            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="border px-2 py-1 rounded text-sm"
            >
              <option value="Newest">Newest</option>
              <option value="Price">Price</option>
              <option value="Popular">Popular</option>
            </select>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mb-6">
          {categories.map((category, i) => (
            <button
              key={i}
              className="border border-gray-300 px-3 py-1 rounded-full text-sm hover:bg-gray-100 transition"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid of products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {sortedProducts.map(({ id, name, price, image }) => (
            <Link
              key={id}
              to="/ip"  // All links go to the same page, no dynamic routing
              className="border rounded-lg p-3 hover:shadow transition flex flex-col items-center"
            >
              <img src={image} alt={name} className="w-32 h-32 object-cover mb-2" />
              <p className="text-base font-medium">{name}</p>
              <p className="text-gray-600 text-sm">৳ {price}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Product;

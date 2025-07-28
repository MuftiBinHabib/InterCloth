import React from 'react'
import { TiTick } from "react-icons/ti";
import { Link } from 'react-router'; // consider changing to 'react-router' 

const Banner = () => {
  return (
    <div className="container">
      <div className="text-center mt-40 font-poppins">
        <h1 className="text-4xl">
          Connecting global buyers with Bangladeshi garment manufacturers
        </h1>

        <ul className="inline-block text-left">
          <li className="flex items-center gap-2 mt-4">
            <TiTick className="text-green-500" />
            Over 1,000 vetted factories
          </li>
          <li className="flex items-center gap-2">
            <TiTick className="text-green-500" />
            MOQ-friendly
          </li>
          <li className="flex items-center gap-2">
            <TiTick className="text-green-500" />
            Direct sourcing
          </li>
        </ul>

        <div className="mt-6 flex justify-center gap-4">
          <Link to="/login">
            <button className="bg-green-500 hover:bg-green-600 text-white rounded-md py-3 px-6 transition">
              Browse Suppliers
            </button>
          </Link>
          <Link to="/login">
            <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-md py-3 px-6 transition">
              Browse Products
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;

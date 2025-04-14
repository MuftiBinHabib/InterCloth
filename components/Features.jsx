import React from 'react'
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const Banner = () => {
  return (
    <div className="container ">

        <div className="mt-60">
        <ul className="font-poppins text-2xl ">Features
        <li className="flex items-center gap-2">
          <IoCheckmarkCircleOutline  className="text-black" />
          Supplier Verification
        </li>
        <li className="flex items-center gap-2">
          <IoCheckmarkCircleOutline  className="text-black" />
          Real-time Order Tracking
        </li>
        <li className="flex items-center gap-2">
          <IoCheckmarkCircleOutline  className="text-black" />
          Sample Orders
        </li>
        <li className="flex items-center gap-2">
          <IoCheckmarkCircleOutline  className="text-black" />
          Flexible Payment Terms
        </li>
        <li className="flex items-center gap-2">
          <IoCheckmarkCircleOutline  className="text-black" />
          Category Filtering 
        </li>
      </ul>
        </div>
      
    </div>
  );
};

export default Banner;

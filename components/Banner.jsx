import React from 'react'
import { TiTick } from "react-icons/ti";
import { Link } from 'react-router';

const Banner = () => {
  return (
    <div className="container">
    <div className=" text-center mt-40 font-poppins "><h1 className='text-4xl'>Connecting global buyers with Bangladeshi garment manufacturers</h1>
    
    <ul className="inline-block text-left ">
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

        <button className='ms-4 bg-green-500 rounded-md pt-3 pb-3 ps-4 pe-4 mt-5'><Link to='/login'>Browse Suppliers</Link></button>
      </ul>

      
    
    </div>
    </div>
  )
}

export default Banner
import React from 'react'
import { IoFilter } from "react-icons/io5";
import { Link } from 'react-router';

const Product = () => {
  return (
    <div className="container">
        <section>
            <h1>Will display products offered by suppliers</h1>

            <div className='flex gap-10'>
              <p>Product Lists</p>

              <ul className='flex justify-between gap-5'>
                <li>Filter</li>
                <li className='pt-1'><IoFilter /></li>
              </ul>
            </div>

            <button className='border'><Link to='/ip'>Product 1</Link></button>
        </section>
    </div>
  )
}

export default Product
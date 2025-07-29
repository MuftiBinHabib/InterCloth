import React from 'react'
import { Link } from 'react-router'

const Cart = () => {
  return (
    <div className="container">
      <section>
        <div className="flex justify-start gap-50">
          <h1 className=''>Product</h1>
          <p className="">Qty</p>
          <p className="">Price</p>
          <Link to='/checkout'><button 
            className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
          >
            Add to Cart
          </button></Link>
        </div>
      </section>
    </div>
  )
}

export default Cart

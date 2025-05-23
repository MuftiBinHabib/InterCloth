import React from 'react'
import { Link } from 'react-router'

const Suppliers = () => {
  return (
    <div className="container">
      <section>
        <div className='border w-75'>
        <p className='text-center'>Logo</p>
        <h1>Factory Name</h1>
        <p>Location</p>
        <p>Tags:</p>
        <p>MOQ</p>
        <p>Capacity</p>
        <p>Average Lead Time</p>
        <div className='flex justify-between'>
        <button className='border p-3 bg-green-300 text-white rounded'><Link to='/products'>View Products</Link></button>
        <button className='border p-3 bg-red-400 text-white rounded'><Link to='/rfq'>Send RFQ</Link></button>
        </div>
        </div>
      </section>
    </div>
  )
}

export default Suppliers
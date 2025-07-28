import React from 'react'
import { Link } from 'react-router'

const IndividualProducts = () => {
  return (
    <div className="container">
        <section>
            <h1>Product Name:</h1>
            <p>Image</p>
            <p>Supplier:</p>
            <p>Price</p>
            <p>MOQ</p>
            <p>Capacity</p>
            <p>Description</p>
            <p>tags</p>
            <p>Size</p>
            <button className='border p-3'><Link to='/add'>Add to Cart</Link></button>
            <button className='border p-3'> <Link to='/rfq'>Request For Quotation</Link></button>
        </section>
    </div>
  )
}

export default IndividualProducts
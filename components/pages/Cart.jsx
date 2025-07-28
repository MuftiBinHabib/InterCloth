import React from 'react'

const Cart = () => {
  return (
    <div className="container">
      <section>
        <div className="flex justify-start gap-50">
          <h1 className=''>Product</h1>
          <p className="">Qty</p>
          <p className="">Price</p>
          <button 
            className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
          >
            Add to Cart
          </button>
        </div>
      </section>
    </div>
  )
}

export default Cart

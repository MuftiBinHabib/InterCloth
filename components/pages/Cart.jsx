import React from 'react'
import { Link } from 'react-router'

const Cart = () => {
  const cartItems = [
    { id: 1, name: 'T-shirt', qty: 2, price: 500 },
    { id: 2, name: 'Jeans', qty: 1, price: 1200 },
  ];

  const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="max-w-md mx-auto p-4">
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-lg font-bold mb-4 text-center">Your Cart</h2>

        {cartItems.map(item => (
          <div key={item.id} className="border rounded p-3 mb-3">
            <div className="flex justify-between items-center mb-1">
              <span className="font-medium">{item.name} (x{item.qty})</span>
              <span className="text-sm text-gray-600">৳{item.price}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span></span>
              <span>Total: ৳{item.price * item.qty}</span>
            </div>
          </div>
        ))}

        {/* Total & Checkout */}
        <div className="flex justify-between items-center mt-4 font-semibold">
          <span>Total</span>
          <span>৳{total}</span>
        </div>

        <Link to="/checkout">
          <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
            Proceed to Checkout
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Cart

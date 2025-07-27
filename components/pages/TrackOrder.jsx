import React from 'react'


const TrackOrder = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Track Your Order</h1>

      <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-md">
        <label htmlFor="orderId" className="block text-sm font-medium text-gray-700 mb-1">
          Enter Order ID
        </label>
        <input
          type="text"
          id="orderId"
          placeholder="e.g. IC-2025-00123"
          className="w-full border border-gray-300 rounded-lg p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Track Order
        </button>

        {/* Static sample output for MVP */}
        <div className="mt-6 bg-gray-100 p-4 rounded-lg text-sm text-gray-700">
          <p><strong>Order ID:</strong> IC-2025-00123</p>
          <p><strong>Status:</strong> In Production</p>
          <p><strong>Estimated Delivery:</strong> August 12, 2025</p>
          <p><strong>Factory:</strong> Dhaka Knitwear Ltd.</p>
        </div>
      </div>
    </div>
  )
}

export default TrackOrder

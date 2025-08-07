import React from 'react';
import { Link } from 'react-router';

const OrderConfirmation = () => {
  const order = {
    id: 'IC-982374',
    date: 'July 29, 2025',
    items: [
      { name: 'T-shirt', quantity: 2, price: 500 },
      { name: 'Jeans', quantity: 1, price: 1200 },
    ],
    total: 2200, // 2 * 500 + 1 * 1200
  };

  return (
    <div className="max-w-3xl mx-auto p-6 rounded-xl shadow-lg bg-white mt-10 border">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-2xl font-bold mb-1">Order Confirmed</h2>
        <p className="text-gray-600 mb-4">Thank you for shopping with InterCloth</p>
      </div>

      <div className="bg-gray-100 p-4 rounded-md mb-4">
        <p className="text-sm text-gray-700">
          <strong>Order ID:</strong> {order.id}
        </p>
        <p className="text-sm text-gray-700">
          <strong>Date:</strong> {order.date}
        </p>
      </div>

      <div className="divide-y">
        {order.items.map((item, index) => (
          <div key={index} className="py-3 flex justify-between">
            <div>
              <p className="font-medium">{item.name}</p>
              <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
            </div>
            <p className="text-sm text-gray-700">৳ {item.price * item.quantity}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-between border-t pt-4 mt-4 text-lg font-semibold">
        <p>Total</p>
        <p>৳ {order.total}</p>
      </div>

      <div className="mt-6 flex justify-center gap-4">
        <Link to="/vieworder">
          <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition">
            View Order
          </button>
        </Link>
        <Link to="/products">
          <button className="px-4 py-2 bg-black text-white rounded hover:bg-gray-900 transition">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirmation;

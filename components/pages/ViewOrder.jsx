import React from 'react';

const ViewOrder = () => {
  // Sample dummy data (replace with real data via props/context/API)
  const order = {
    id: 'IC-982374',
    date: 'July 29, 2025',
    customer: 'Mufti Bin Habib',
    items: [
      { name: 'Men’s Polo Shirt', quantity: 3, price: 150 },
      { name: 'Women’s Denim Jacket', quantity: 2, price: 320 },
    ],
    total: 1090,
  };

  return (
    <div className="max-w-3xl mx-auto p-6 mt-10 bg-white shadow-md rounded-xl border">
      <h2 className="text-2xl font-bold mb-4">Order Details</h2>

      <div className="bg-gray-100 p-4 rounded-md mb-6 text-sm text-gray-700">
        <p><strong>Order ID:</strong> {order.id}</p>
        <p><strong>Customer:</strong> {order.customer}</p>
        <p><strong>Date:</strong> {order.date}</p>
      </div>

      <div className="divide-y border-t border-b">
        {order.items.map((item, idx) => (
          <div key={idx} className="py-4 flex justify-between items-center">
            <div>
              <p className="font-medium">{item.name}</p>
              <p className="text-sm text-gray-500">Qty: {item.quantity} × ৳{item.price}</p>
            </div>
            <p className="font-semibold text-gray-800">
              ৳ {item.quantity * item.price}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-6 text-lg font-semibold">
        <p>Total</p>
        <p>৳ {order.total}</p>
      </div>

      <div className="mt-6 text-center">
        <button
          className="px-4 py-2 bg-black text-white rounded hover:bg-gray-900 transition"
          onClick={() => window.history.back()}
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default ViewOrder;

import React from 'react';

const Checkout = () => {
  // Sample cart items (replace with actual data later)
  const cartItems = [
    { id: 1, name: 'T-shirt', qty: 2, price: 500 },
    { id: 2, name: 'Jeans', qty: 1, price: 1200 },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left: Billing & Shipping */}
        <div className="flex-1 space-y-6">
          {/* Billing Information */}
          <div className="bg-white shadow-md rounded-lg p-4 space-y-4">
            <h2 className="text-xl font-semibold">Billing Information</h2>
            <input type="text" placeholder="Full Name" className="w-full border p-2 rounded" />
            <input type="email" placeholder="Email Address" className="w-full border p-2 rounded" />
            <input type="text" placeholder="Phone Number" className="w-full border p-2 rounded" />
          </div>

          {/* Shipping Information */}
          <div className="bg-white shadow-md rounded-lg p-4 space-y-4">
            <h2 className="text-xl font-semibold">Shipping Information</h2>
            <input type="text" placeholder="Address Line 1" className="w-full border p-2 rounded" />
            <input type="text" placeholder="Address Line 2 (optional)" className="w-full border p-2 rounded" />
            <input type="text" placeholder="City" className="w-full border p-2 rounded" />
            <input type="text" placeholder="Postal Code" className="w-full border p-2 rounded" />
            <input type="text" placeholder="Country" className="w-full border p-2 rounded" />
          </div>
        </div>

        {/* Right: Order Summary */}
        <div className="w-full lg:w-1/3 space-y-6">
          <div className="bg-white shadow-md rounded-lg p-4 space-y-4">
            <h2 className="text-xl font-semibold">Order Summary</h2>

            {/* Product List */}
            <div className="border rounded p-2">
              {cartItems.map(item => (
                <div key={item.id} className="flex justify-between text-sm border-b last:border-b-0 py-2">
                  <span className="w-1/2">{item.name}</span>
                  <span className="w-1/4 text-center">x{item.qty}</span>
                  <span className="w-1/4 text-right">৳{item.price * item.qty}</span>
                </div>
              ))}
            </div>

            {/* Totals */}
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>৳{cartItems.reduce((total, item) => total + item.price * item.qty, 0)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>৳0.00</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>৳{cartItems.reduce((total, item) => total + item.price * item.qty, 0)}</span>
            </div>
          </div>

          {/* Place Order Button */}
          <div className="text-right">
            <button className="w-full bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

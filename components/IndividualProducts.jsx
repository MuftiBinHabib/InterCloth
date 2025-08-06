import React, { useState } from 'react';
import { Link } from 'react-router';

const IndividualProducts = () => {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('');
  const [showCustomizationForm, setShowCustomizationForm] = useState(false);

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const toggleCustomizationForm = () => {
    setShowCustomizationForm(!showCustomizationForm);
  };

  return (
    <div className="container mx-auto p-6">
      <section className="flex flex-col md:flex-row gap-8">
        {/* ✅ Big Product Image (Carousel placeholder) */}
        <div className="w-full md:w-1/2">
          <div className="border rounded-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/500"
              alt="Product"
              className="w-full h-auto"
            />
          </div>
          {/* Carousel controls can be added later */}
        </div>

        {/* ✅ Product Info Section */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold mb-3">Product Name</h1>

          <p className="mb-2"><strong>Supplier:</strong> ABC Garments Ltd.</p>
          <p className="mb-2"><strong>Price:</strong> $25</p>
          <p className="mb-2"><strong>MOQ:</strong> 100 pieces</p>
          <p className="mb-2"><strong>Capacity:</strong> 5000 pieces/month</p>
          <p className="mb-2"><strong>Description:</strong> High-quality cotton T-shirt with premium stitching.</p>
          <p className="mb-4"><strong>Tags:</strong> Fashion, T-shirt, Cotton</p>
          <p className="mb-4"><strong>Fabric:</strong> Cotton / Polyester blend</p>

          {/* ✅ Size Dropdown */}
          <div className="mb-4">
            <label className="block font-semibold mb-1">Size:</label>
            <select
              value={size}
              onChange={handleSizeChange}
              className="border rounded px-3 py-2 w-full"
            >
              <option value="">Select Size</option>
              <option value="S">Small</option>
              <option value="M">Medium</option>
              <option value="L">Large</option>
              <option value="XL">Extra Large</option>
            </select>
          </div>

          {/* ✅ Quantity Selector */}
          <div className="mb-6">
            <label className="block font-semibold mb-1">Quantity:</label>
            <input
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              className="border rounded px-3 py-2 w-full"
              min="1"
            />
          </div>

          {/* ✅ Action Buttons */}
          <div className="flex gap-4">
            <Link to='/add'><button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
              Add to Cart
            </button></Link>
            <button
              className="bg-gray-800 text-white px-6 py-3 rounded hover:bg-gray-900"
              onClick={toggleCustomizationForm}
            >
              Request Customization
            </button>
          </div>

          {/* ✅ Popup Customization Form */}
          {showCustomizationForm && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-6 rounded-lg w-96">
                <h2 className="text-xl font-bold mb-4">Request Customization</h2>
                <form>
                  <div className="mb-4">
                    <label className="block mb-1 font-semibold">Custom Details:</label>
                    <textarea
                      className="border rounded w-full p-2"
                      rows="4"
                      placeholder="Enter your customization details"
                    ></textarea>
                  </div>
                  <div className="flex justify-end gap-4">
                    <button
                      type="button"
                      className="px-4 py-2 bg-gray-400 text-white rounded"
                      onClick={toggleCustomizationForm}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-600 text-white rounded"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default IndividualProducts;

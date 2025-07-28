import React from 'react';
import { Link } from 'react-router';

const HowItWorks = () => {
  return (
    <div className="container font-poppins mt-[70px] text-2xl">
      <h2 className="mb-8 text-center text-3xl">How It Works</h2>

      <div className="lg:flex justify-between gap-10">
        {/* B2B Column */}
        <div className="left bg-gray-50 p-6 rounded-lg shadow w-full lg:w-1/2">
          <h3 className="mb-4 text-green-600 text-xl font-semibold">For Businesses (B2B)</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>Sign Up as a Buyer</li>
            <li>Browse Verified Factories</li>
            <li>Request for Quotes (RFQ)</li>
            <li>Negotiate & Finalize Orders</li>
            <li>Track Shipment & Delivery</li>
          </ol>
          <Link to="/login"><button className="mt-6 bg-green-500 text-white rounded-md pt-3 pb-3 ps-6 pe-6 hover:bg-green-600 transition">Get Started (B2B)</button></Link>
        </div>

        {/* B2C Column */}
        <div className="right bg-gray-50 p-6 rounded-lg shadow w-full lg:w-1/2 mt-10 lg:mt-0">
          <h3 className="mb-4 text-blue-600 text-xl font-semibold">For Individuals (B2C)</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>Create Your Account</li>
            <li>Browse Ready-Made Products</li>
            <li>Add to Cart</li>
            <li>Checkout & Pay</li>
            <li>Get It Delivered</li>
          </ol>
                    <Link to="/login"><button className="mt-6 bg-blue-500 text-white rounded-md pt-3 pb-3 ps-6 pe-6 hover:bg-blue-600 transition">Get Started (B2C)</button></Link>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;

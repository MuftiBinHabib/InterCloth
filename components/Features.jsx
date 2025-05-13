import React from 'react'
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const Banner = () => {
  return (
    <div className="container ">

        <div className="mt-60">
        <ul className="font-poppins text-2xl ">Features
        <li className="flex items-center gap-2">
          <IoCheckmarkCircleOutline  className="text-black" />
          Supplier Verification
        </li>
        <li className="flex items-center gap-2">
          <IoCheckmarkCircleOutline  className="text-black" />
          Real-time Order Tracking
        </li>
        <li className="flex items-center gap-2">
          <IoCheckmarkCircleOutline  className="text-black" />
          Sample Orders
        </li>
        <li className="flex items-center gap-2">
          <IoCheckmarkCircleOutline  className="text-black" />
          Flexible Payment Terms
        </li>
        <li className="flex items-center gap-2">
          <IoCheckmarkCircleOutline  className="text-black" />
          Category Filtering 
        </li>
      </ul>
        </div>

        <p> 1. Landing Page
Two clear buttons:

👤 Shop Clothes (B2C)

🏭 Order in Bulk (B2B)  both these options will be in individual suppliers

Optional: Language switcher (বাংলা / English) 

🔷 2. B2C Flow – Shop Clothes
🧭 Page: Product Listings
Category Filter (T-Shirts, Hoodies, Women’s Wear, etc.)

Simple Grid View (3 columns)

Sort by: Newest / Price / Popular

Minimal image, name, price

🧭 Page: Product Details
Big product image carousel

Title, short description

Fabric info, Size dropdown, Quantity

💳 Add to Cart button

🛠️ “Request Customization” button (opens a small form popup)

🧭 Page: Cart
Simple list (image + name + price)

Total price

Checkout button

🧭 Page: Checkout
Name, Address, Contact

Payment method (bKash, COD, Stripe)

Confirm Order button

✅ Confirmation Page
“Thank you. Order ID #1234”

Button: “Continue Shopping”

🔷 3. B2B Flow – Order in Bulk
🧭 Page: Factory Catalog
List of verified factories

Info: MOQ (Minimum Order Quantity), specialization (e.g. denim, knit), response time

🧭 Page: Product Templates
Browse or search by category

Each card: image + MOQ + price range

🧭 Page: Custom Order Request
Form:

Product type

Fabric preference

Quantity

Upload tech pack (optional)

Delivery location

✅ Confirmation Page
“Thanks. We'll connect you to 3 factories within 48 hours.”

🔷 4. User Dashboard
After login – applies to both B2C and B2B

View orders

Track status (Pending / In Production / Shipped)

Download invoice

Send inquiry / message seller/factory

✏️ Design Style Guidelines
Colors: White background, black text, 1 primary color (e.g., navy or dark green)

Font: Clean sans-serif (Inter, Poppins, or Roboto)

Spacing: Generous whitespace, card-based layout

Buttons: Rounded, bold text, minimal icons

Animations: Only on hover or transition, no extra noise</p>
      
    </div>
  );
};

export default Banner;

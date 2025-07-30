import React from 'react'
import { Link } from 'react-router'

const RFQ = () => {
  return (
    <div className="container">
      <section>
        <div className='border w-75'>
        <p>Product Type</p>
        <h1>Factory Specs:</h1>
        <p>Type , GSM , Color , Finishing</p>
        <p>Quantity per size / File Upload</p>
        <p>Total pieces</p>
        <p>Packaging Requirements</p>
        <p>Delivery Location / Incoterms</p>
        <p>Delivery Date</p>
        <p>Contact Details</p>
        <p>Size</p>
        
        </div>

        <p>This will be sent via email to suppliers and Suppliers will send details via WhatsApp</p>
        <Link to='/checkout'><button className='bg-green-500 text-white px-2 py-1 border-rounded'>Confirm</button></Link>
      </section>
    </div>
  )
}

export default RFQ
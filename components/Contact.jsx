import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="container">
      <section className='mt-5'>
        <div>
          <h2>Number:</h2>
          <h2>Address:BLABLABLA</h2>

          <ul className='mt-5 flex gap-5'>Socials:
            <li className='pt-2'><FaFacebook /></li>
            <li className='pt-2'><FaInstagram /></li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Contact
import React from 'react';
import { Link } from 'react-router'; 

const Footer = () => {
  return (
    <div className="container">
    <div className="w-full mt-60 bg-black text-white">
      <section className="flex justify-between items-center px-5 py-5">
        <div className="text-4xl"><Link to='/'>InterCloth</Link></div>
        <ul className="text-xl space-x-6 ">
          <li>
            <Link to="/faq" className="group relative inline-block">
              <span className="after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-white after:w-0 after:transition-all after:duration-[500ms] group-hover:after:w-full ">
                FAQ
              </span>
            </Link>
          </li>
          <li>
            <Link to="/contact" className="group relative inline-block mt-2">
              <span className="after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-white after:w-0 after:transition-all after:duration-[500ms] group-hover:after:w-full">
                Contact Us
              </span>
            </Link>
          </li>
        </ul>
      </section>
    </div>
    </div>
  );
};

export default Footer;

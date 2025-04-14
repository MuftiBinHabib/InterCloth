import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { CiMenuBurger } from "react-icons/ci";

const Header = () => {
  return (
    <header>
        <nav>
            <div className='container'>

<div className="flex justify-between">

<div className="text-4xl mt-2 ms-2">InterCloth</div>


<div>
<CiMenuBurger className='lg:hidden text-4xl'/>

    <ul className=' hidden lg:flex justify-between gap-10 mt-2'>
        <li className='text-4xl'><FaShoppingCart /></li>
        <li className='text-4xl flex'><IoPerson /><span className='text-2xl ms-1'>Sign In</span></li>
        <li><button className='text-xl bg-blue-300 rounded-md ps-5 pe-5 pt-2 pb-2'>Sign Up</button></li>

    </ul>
</div>



</div>
                


            </div>
        </nav>
    </header>
  )
}

export default Header
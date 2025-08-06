import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { CiMenuBurger } from "react-icons/ci";
import { Link } from 'react-router';
import { HiMagnifyingGlass } from "react-icons/hi2";


const Header = () => {
  return (
    <header>
        <nav>
            <div className='container'>

<div className="flex justify-between">

<Link to='/'><div className="text-4xl mt-2 ms-2">InterCloth</div></Link>


<div>
<CiMenuBurger className='lg:hidden text-4xl'/>

    <ul className=' hidden lg:flex justify-between gap-10 mt-2'>
        <Link to='/checkout'><li className='text-4xl'><FaShoppingCart /></li></Link>
        <Link to='/login'><li className='text-4xl flex'><IoPerson /><span className='text-2xl ms-1'>Sign In/Sign Up</span></li></Link>
         <Link to='/trackorder'>
  <li className='flex items-center gap-2 text-2xl'>
    <HiMagnifyingGlass />
    Track Order
  </li>
</Link>


    </ul>
</div>



</div>
                


            </div>
        </nav>
    </header>
  )
}

export default Header
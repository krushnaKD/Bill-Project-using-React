import React from 'react'
import About from './About'
import Menu from './Menu'
import Background from './Background'
import { Link } from 'react-router-dom'

function Navbar({set}) {
  return (
    <div className='w-full  h-22 p-5 flex items-center justify-between bg-red-300 fixed top-0' >
    <h1 className='font-semibold text-2xl'>Ice Creame Cafe</h1>
    <div className=''>
        <ul className='flex gap-10 text-lg'>
        <Link to="/Background">Home</Link> 
            <Link to="/Menu">Menu</Link> 
            <li>Orders</li>
            <Link to="/About">About</Link>
            {/* <li className='bg-red-300 px-1 gap-10 rounded-md text-[17px]'>Favouriets <span>({set.filter(item => item.status === true).length})</span></li> */}
        </ul>
    </div>
     </div>
  )
}

export default Navbar
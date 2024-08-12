import React from 'react'

function Navbar({set}) {
  return (
    <div className='w-full  h-22 p-5 flex items-center justify-between bg-red-300 fixed top-0' >
    <h1 className='font-semibold text-2xl'>Ice Creame Cafe</h1>
    <div className=''>
        <ul className='flex gap-10 text-lg'>
            <li>Home</li>
            <li>Menu</li>
            <li>Orders</li>
            <li className='bg-red-300 px-1 gap-10 rounded-md text-[17px]'>Favouriets <span>({set.filter(item => item.status === true).length})</span></li>
        </ul>
    </div>
     </div>
  )
}

export default Navbar
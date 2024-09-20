import React, { useContext } from 'react'
import dataContext from "../Context/Context"
function Card() {
  // const { users, setusers } = useContext(dataContext);
  //         console.log(users);
          
    // const {image,name,price,productId,status} = values

  return (
    <div className='p-2  w-64  border-2 border-slate-700 rounded-md relative mt-20 mb-10'>
       {/* <div className='w-full h-34   rounded-md hover:scale-110'>
        <img className='object-cover hover:scale-110  transition-all duration-100 ' src={image} alt="" />
       </div>
       <div>
        <h1 className='mt-3'>Name :- {name}</h1>
        <h3 className='mt-3 mb-4'>Price :- {price}</h3>
        <button onClick={()=>{
          handleClick(productId);
          getData(productId);
          }}  className={`px-3 text-white rounded-md ${status === false ? "bg-orange-600" : "bg-sky-500"} ml-10 whitespace-nowrap mt-0`} >Add To Cart</button>
       </div> */}
    </div>
  )
}

export default Card

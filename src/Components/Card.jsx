import React from 'react'

function Card({values,handleClick,index}) {

    const {image,name,price,productId,status} = values

  return (
    <div className='p-2  w-64  border-2 border-slate-700 rounded-md relative mt-20 mb-10'>
       <div className='w-full h-34 border-2 border-slate-700 rounded-md '>
        <img className='object-cover' src={image} alt="" />
       </div>
       <div>
        <h1 className='mt-3'>Name :- {name}</h1>
        <h3 className='mt-3 mb-4'>Price :- {price}</h3>
        <button onClick={()=>{
          handleClick(productId);
          getData(productId)
          }}  className={`px-3 text-white rounded-md ${status === false ? "bg-orange-600" : "bg-sky-500"} absolute left-1/2 -translate-x-[50%] whitespace-nowrap mt-0`} >Add To Cart</button>
       </div>
    </div>
  )
}

export default Card

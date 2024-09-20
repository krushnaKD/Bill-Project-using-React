import React, { useContext } from 'react'
import { dataContext } from '../Context/Context';
import { Link, useParams } from 'react-router-dom';

const Details = () => {
  const { users, setusers } = useContext(dataContext);
   
  
 const {id} =  useParams()
      console.log(id);
      
   
  return (
    <>
   <div className="w-full h-screen p-20 flex items-center justify-center ">
      <div className="w-[60%] flex gap-20 ">
        <img
          className="w-[50vh] bg-no-repeat object-contain"
          src="https://assets.unileversolutions.com/v1/1868113.png?im=AspectCrop=(351,351);Resize=(351,351)"
          alt=""
        />
        <div className="mt-20">
          <h1 className="text-3xl font-semibold mb-5"></h1>
          <h3 className="text-zinc-500 mb-5"></h3>
          <h2 className="mb-10 text-pink-400 font-semibold">
           
          </h2>
          <p className="font-semibold text-lg text-zinc-500 mb-5">
            
          </p>
          <Link className="rounded text-slate-500 text-lg border-2 border-slate-200 px-6 py-1 hover:bg-green-100 ">
            Edit
          </Link>
          <button  className="rounded text-red-300 text-lg border-2 border-red-200 px-6 py-1 ml-2 hover:bg-red-300 hover:text-black  ">
            Delete
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Details

import React from 'react'

const Feedback = () => {
  return (
    <div className='w-full h-screen p-5 flex flex-col items-center'>
        <div className='flex flex-col w-[50%]  p-10'>
      <h1 className='text-2xl mb-3'>Feedback</h1>
      <form action="" className='flex flex-col items-center'>
        <input className='bg-zinc-300 rounded-md m-auto w-[60%] py-2 mb-5 p-2' type="text" placeholder='Enter Full Name' />
        <input className='bg-zinc-300 rounded-md m-auto w-[60%] py-2 mb-5 p-2' type="email " placeholder='Enter Email' />
        <div className='flex gap-10 justify-center'>
        <input className='bg-zinc-300 rounded-md  w-[32%] py-2 mb-5 p-2' type="text" placeholder='Subject' />
        <input className='bg-zinc-300 rounded-md  w-[30%] py-2 mb-5 p-2' type="number" placeholder='Number' />
        </div>
        <textarea  className="bg-zinc-300 rounded-md w-[60%]" rows={5} name="" id=""></textarea>
        <button className='bg-lime-300 px-2 py-1 mt-3 rounded-md hover:bg-red-400'>Submit</button>
      </form>
      </div>
    </div> 
  )
}

export default Feedback

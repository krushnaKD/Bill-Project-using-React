import React, { useContext, useEffect, useState } from "react";
import { dataContext } from "../Context/Context";
import { useParams } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

function Order() {
  const {cart, setcart} = useContext(CartContext);
  // console.log(cart);
  

  console.log("kalia", cart);
 
  // const price = () => {
    let pricees = 0
    cart.forEach(element => {
       pricees += element.price
      console.log(pricees);
      
    });

    const storedUser = localStorage.getItem('cart')
    console.log(storedUser);
    
  
  return (
    <>
     <div className="w-full h-screen bg-zinc-200 p-10">
    <div className=" p-10 flex  gap-10  "> 
      {cart.map((p,i) => (
        <>
        <div key={i} className="p-2  w-[10vw] h-[30vh] bg-zinc-100 rounded-md relative  mb-5 flex flex-col shadow-2xl">
        <img className="object-cover hover:scale-110 w-[30vw] transition-all duration-100  " src={p.image} alt="" />
        <h1>{p.name}</h1>
        <p>${p.price}</p>
       
        </div>
        
        </>
        
      ))}
       
      </div>
      <h1 className="mt-[10%] w-[50%]  text-xl font-semibold ">Total is :-${pricees}</h1>

      </div>
    </>
  );
}

export default Order;

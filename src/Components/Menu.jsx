import React, { useContext, useEffect, useState } from "react";
import Card from "./Card";
import Navbar from "./Navbar";
import { dataContext } from "../Context/Context";
import Order from "./Order";
import { CartContext } from "../Context/CartContext";
function Menu() {
  const { items, setitems} = useContext(dataContext);
  const {cart, setCart } = useContext(CartContext);


  console.log(items.name);
  
  
   
  const handleClick = (item) => {
    let ispresent = false;
    cart.forEach((product) => {
      if (item.productId === product.productId) ispresent = true;
    });
    if (ispresent) {
      return;
    }
    setCart([...cart, item]);
  };
  

  return (
    <div className="p-10 flex flex-wrap items-center justify-between gap-10  top-[600px] bg-slate-100">
      {items.map((a, i) => (
        <div className="p-2  w-64  bg-zinc-100 rounded-md relative mt-20 mb-5 flex flex-col shadow-2xl">
          <div className="   rounded-md hover:scale-110">
            <img
              className="object-cover hover:scale-110 w-[30vw] transition-all duration-100 "
              src={a.image}
              alt=""
            />
          </div>
          <div>
            <h1 className="mt-3  justify-self-start ">Name :- {a.name}</h1>
            <h3 className="mt-3 mb-4">Price :- ${a.price}</h3>
            <button
              onClick={() => {
                console.log("jee");

                handleClick(a);
              }}
              className={`px-3 text-white rounded-md ${
                status === false ? "bg-orange-600" : "bg-sky-500"
              } ml-10 whitespace-nowrap mt-0`}
            >
              Add To Cart
            </button>
          </div>
        </div>
      ))}
      {items.map((a, i) => (
        <div className="p-2  w-64 bg-zinc-100 rounded-md relative mt-20 mb-10 flex flex-col  shadow-2xl">
          <div className="   rounded-md hover:scale-110">
            <img
              className="object-cover hover:scale-110 w-[30vw] transition-all duration-100 "
              src={a.image}
              alt=""
            />
          </div>
          <div>
            <h1 className="mt-3  justify-self-start ">Name :- {a.name}</h1>
            <h3 className="mt-3 mb-4">Price :- {a.price}</h3>
            <button
              onClick={() => {
                console.log("jee");

                // handleClick(a);
              }}
              className={`px-3 text-white rounded-md ${
                status === false ? "bg-orange-600" : "bg-sky-500"
              } ml-10 whitespace-nowrap mt-0`}
            >
              Add To Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Menu;

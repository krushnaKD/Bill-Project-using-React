import React, { useContext, useEffect, useState } from "react";
import Card from "./Card";
import Navbar from "./Navbar";
import { dataContext } from "../Context/Context";
import Order from "./Order";
import { Link, useParams } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
function Menu() {
  const { users, setusers } = useContext(dataContext);
  const [carts, setcarts] = useState([]);
  // const {cartProducts, setcartProducts} = useContext(CartContext);

  // const handleClick = (item) => {
  //   let ispresent = false;
  //   carts.forEach((product) => {
  //     if (item.productId === product.productId) ispresent = true;
  //   });
  //   if (ispresent) {
  //     return;
  //   }
  //   setcartProducts([...carts, item]);
  // };

  return (
    <div className="p-10 flex flex-wrap items-center justify-between gap-10  top-[600px] bg-slate-100">
      {users.map((a, i) => (
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
      {users.map((a, i) => (
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
      {/* <Order className="none" cart={cart} setcart={setcart} /> */}
    </div>
  );
}

export default Menu;

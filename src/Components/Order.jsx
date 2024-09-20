import React, { useContext, useEffect, useState } from "react";
import { dataContext } from "../Context/Context";
import { useParams } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

function Order() {
  // const {cart, setcart} = useContext(CartContext);

  console.log("kalia", cart);

  // const { users } = useContext(dataContext);
  return (
    <>
      {/* {cart.map((p) => (
        <h1>{p.name}</h1>
      ))} */}
    </>
  );
}

export default Order;

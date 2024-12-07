import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../Context/CartContext";

function Order() {
  const { cart } = useContext(CartContext); // Cart data from context
  const [totalPrice, setTotalPrice] = useState(0);

  // Calculate total price
  useEffect(() => {
    const calculateTotal = () => {
      const total = cart.reduce((acc, item) => acc + item.price, 0);
      setTotalPrice(total);
    };
    calculateTotal();
  }, [cart]); // Recalculate when the cart updates

  return (
    <div className="w-full min-h-screen bg-zinc-200 p-10 ">
      {/* Cart Items Section */}
      <div className="flex flex-wrap gap-6 justify-center mt-20">
        {cart.length > 0 ? (
          cart.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-lg w-72 flex flex-col items-center transition-transform duration-200 hover:scale-105"
            >
              <div className="w-full  overflow-hidden rounded-md">
                <img
                  className="object-cover w-full h-full"
                  src={item.image}
                  alt={item.name}
                />
              </div>
              <h1 className="mt-4 text-lg font-semibold text-gray-800 text-center">
                {item.name}
              </h1>
              <p className="mt-2 text-gray-600 text-center">${item.price}</p>
            </div>
          ))
        ) : (
          <h1 className="text-2xl text-gray-500 font-semibold">
            Your cart is empty!
          </h1>
        )}
      </div>

      {/* Total Price Section */}
      {cart.length > 0 && (
        <div className="mt-10 text-right pr-10">
          <h1 className="text-xl font-semibold">
            Total: <span className="text-orange-600">${totalPrice.toFixed(2)}</span>
          </h1>
        </div>
      )}
    </div>
  );
}

export default Order;

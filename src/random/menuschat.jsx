import React, { useContext } from "react";
import { dataContext } from "../Context/Context";
import { CartContext } from "../Context/CartContext";

function Menu() {
  const { items } = useContext(dataContext);
  const { cart, setCart } = useContext(CartContext);

  const handleClick = (item) => {
    let isPresent = cart.some((product) => product.productId === item.productId);
    if (!isPresent) {
      setCart([...cart, item]);
    }
  };

  return (
    <div className="p-6 bg-slate-100">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Explore Our Menu
        </h1>
        <p className="text-gray-600 text-sm md:text-base mt-2">
          Discover your favorites and add them to your cart!
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((a, i) => (
          <div
            key={i}
            className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center hover:scale-105 transition-transform duration-200"
          >
            <img
              className="object-cover w-full h-48 rounded-md"
              src={a.image}
              alt={a.name}
            />
            <h1 className="mt-4 text-lg font-semibold text-gray-800">
              Name: {a.name}
            </h1>
            <h3 className="mt-2 text-gray-600">Price: ${a.price}</h3>
            <button
              onClick={() => handleClick(a)}
              className="mt-4 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md w-full text-sm md:text-base"
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;

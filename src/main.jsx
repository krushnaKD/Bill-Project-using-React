import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Context from "./Context/Context.jsx";
import CartProvider, { CartContext } from "./Context/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Context>
    <CartProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
   </CartProvider>
  </Context>
);

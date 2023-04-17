import React from "react";
import "./Navbar.css";
import {  useSelector } from "react-redux";


function Navbar() {

const cart = useSelector((state)=> state.cartReducer.cart)
let count =0;
cart.forEach(item => count+= item.quantity)

  return <div className="navbar-box">
    <div className="quantity">
     
 <p className="quantity-style" >Total quantity : {count}</p>
      
   
      </div>
  </div>;
}

export default Navbar;

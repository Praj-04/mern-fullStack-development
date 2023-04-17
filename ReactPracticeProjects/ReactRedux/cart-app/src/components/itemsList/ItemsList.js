import React, { useState } from "react";
import "./ItemsList.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToCart, deleteFromCart, removeFromCart } from "../../redux/slices/cartSlice";
import { deleteProducts } from "../../redux/slices/itemSlice";

function ItemsList() {
  const items = useSelector((state) => state.itemsReducer.items);
  const dispatch = useDispatch();
  const cart = useSelector((state)=>state?.cartReducer?.cart)
 
  return (
    <div className="itemsList-outerBox">
      {items.map((item) => {
        const curItem = cart.find((itemse) => itemse.id === item.id);
        const curQuantity = curItem ? curItem.quantity : 1;
        return (
          <>
            <div className="items">
              <div className="left-items">
                <p>{item.itemName}</p>
                <AiOutlinePlus
                  style={{ color: "green" }}
                  className="add-subtract"
                  onClick={()=> dispatch(addToCart(item.id))}
                />
                
                <p>{curQuantity} </p>
                <AiOutlineMinus
                  style={{ color: "red" }}
                  className="add-subtract"
                  onClick={()=> dispatch(removeFromCart(item.id))}
                />
              </div>

              <div className="right-items">
               
                <button onClick={()=> {
                  dispatch(deleteProducts(item.id));
                  dispatch(deleteFromCart(item.id))}}> Delete </button>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default ItemsList;

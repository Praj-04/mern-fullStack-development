import React, { useRef } from "react";
import "./AddItem.css";
import { useDispatch } from "react-redux";

import { nanoid } from '@reduxjs/toolkit';
import { addProducts } from "../../redux/slices/itemSlice";

function AddItem() {
  const dispatch = useDispatch();
  const itemRef = useRef(null);


  function handleAddItem(e) {
e.preventDefault();
const itemName = itemRef.current.value;
console.log(itemName);
dispatch(addProducts({
itemName, 
id:nanoid(4)

}))
  }

  return (
    <div className="addItem-outerBox">
      <div className="addItem-innerPart">
        <form>
          <input
            className="input-addItem"
            type="text"
            placeholder="Add Item"
            ref={itemRef}
          />

          <button className="button-style" onClick={handleAddItem}>
            Add Item
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddItem;

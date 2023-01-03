import React from "react";
import SingleNote from "./SingleNote";
import { AiOutlineSearch } from "react-icons/ai";
import "./NotesBox.css";

function NotesBox() {
  return (
    <div className="body">
      <div className="container">
        <div className="notes-heading">
          <h2>Notes</h2>
          <button className="toggle-style">ToggleMode</button>
        </div>
        <form className="search-bar">
          <p>
            {" "}
            <AiOutlineSearch />{" "}
            <input className="inputtext-style" type="text" placeholder="type to search" />{" "}
          </p>
        </form>
       </div>
       
      <SingleNote />
    </div>
  );
}

export default NotesBox;

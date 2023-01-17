import React from "react";
import "./NotesBox.css";

import { MdOutlineDeleteForever } from "react-icons/md";

function SingleNote(props) {
  function deleteNote(e) {
    //    const note = props.note.filter((element)=> e.id === element.id)
  }

  return (
    <div className="note" style={{ backgroundColor: "pink" }}>
      <p className="note-style" style={{ backgroundColor: "pink" }}>
        {props.note}
      </p>
      <div className="bottom-part">
        <p> {new Date().toLocaleString()} </p>
        <button style={{ backgroundColor: "pink" }} onClick={deleteNote}>
          <MdOutlineDeleteForever />
        </button>
      </div>
    </div>
  );
}

export default SingleNote;

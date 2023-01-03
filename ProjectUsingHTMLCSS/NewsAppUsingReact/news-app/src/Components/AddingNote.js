import React from "react";
import "./SingleNote.css";
import { MdDeleteForever } from "react-icons/md";

function AddingNote(props) {
  console.log("received pro", props.notesArray);
  return (
    <div className="outerBox1">
      <div className="width ">
        <p style={{padding:'15px'}}>{props.note}</p>

        <div className="bottom-part">
          <p>{new Date().toLocaleDateString()}</p>
          <p>
            <MdDeleteForever />
          </p>
        </div>
      </div>
    </div>
  );
}

export default AddingNote;

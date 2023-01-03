import React, { useState } from "react";
import AddingNote from "./AddingNote";
import "./SingleNote.css";

function SingleNote() {
  const [currNote, setCurrentNote] = useState("");
  const [note, setNote] = useState([]);

  function updateCurrentNote(event) {
    event.preventDefault();
    setCurrentNote(event.target.value);
    console.log("entered note", currNote);
  }

  function addNote() {
    console.log(currNote);
    const newNotesArray = [...note, currNote];

    setNote(newNotesArray);
    console.log(note);
  }

  return (
    <div className="outerBox">
      <ul className="ul-style">
        {note.map((element, index) => {
          return (
            <li key={index}>
              <AddingNote note={element} />
            </li>
          );
        })}
      </ul>

      <div className="blueBox">
        <form className="single-form-style" >
          <textarea
            onChange={updateCurrentNote}
            className="textAreaStyle"
            name="typeNote"
            id="typeNote"
            cols="30"
            rows="10"
            placeholder="Type to add a note..."
          />
        </form>
        <div className="bottom">
          <p className="save-click" onClick={addNote}>
            Save
          </p>
        </div>
      </div>
    </div>
  );
}

export default SingleNote;

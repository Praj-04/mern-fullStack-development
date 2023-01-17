import React, { useState } from "react";
import "./NotesBox.css";
import { GrFormSearch } from "react-icons/gr";
import SingleNote from "./SingleNote";

function NotesBox() {
  // const notes = useRef(null);
  const [textAreaCount, setTextAreaCount] = useState(200);

  const [currNote, setCurrNote] = useState("");
  const [note, setNote] = useState([]);

  function recalculate(e) {
    setTextAreaCount(200 - e.target.value.length);
  }

  function updateCurrNote(e) {
    e.preventDefault();
    setCurrNote(e.target.value);
    console.log(currNote);
  }

  function addNote(e) {
    e.preventDefault();
    const newNotesArray = [...note, currNote];
    setNote(newNotesArray);
    console.log(note);
  }

  return (
    <div className="NotesBox">
      <div className="header">
        <h2>Notes</h2>
        <button>ToggleMode</button>
      </div>

      <div className="search-bar">
        <span>
          <GrFormSearch />
        </span>
        <input type="text" placeholder="type to search..." />
      </div>

      <div className="notes-part">
        <div className="note">
          <form>
            <textarea
              className="note-style"
              maxLength={200}
              placeholder="Type to add a note"
              // onChange={recalculate}
              onChange={(e) => {
                recalculate(e);
                updateCurrNote(e);
              }}

              // onChange={
              //   // recalculate();
              //   updateCurrNote
              // }
            />
            <div className="bottom-part">
              <p> {`${textAreaCount} Remaining`} </p>
              {/* <p>Remaining </p> */}
              <button onClick={addNote}>Submit</button>
            </div>
          </form>
        </div>

        <>
          {note.map((element, i) => {
            return <SingleNote key={i} note={element} />;
          })}
        </>
      </div>
    </div>
  );
}

export default NotesBox;

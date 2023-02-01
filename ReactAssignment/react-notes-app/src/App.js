import { useState } from "react";
import NoteList from "./components/NoteList";
import { nanoid } from "nanoid";
import React from "react";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";

function App() {
  const [noteText, setNoteText] = useState("");
  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [notes, setNotes] = useState([]);

  function addNote() {
    if (noteText.trim().length > 0) {
      const date = new Date().toLocaleDateString();
      setNoteText("");
      const newNote = {
        text: noteText,
        date: date,
        id: nanoid(),
      };
      const updatedNotes = [...notes, newNote];
      setNotes(updatedNotes);
    } else {
      alert("Enter a note");
      setNoteText("");
    }
  }

  function handleNoteText(text) {
    setNoteText(text);
  }

  function handleDeleteNote(id) {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  }

  function handleSearchText(text) {
    setSearchText(text);
  }

  return (
    <>
      <div className={darkMode && "dark-mode"}>
        <Header setDarkMode={setDarkMode} />
        <SearchBar
          searchText={searchText}
          handleSearchText={handleSearchText}
        />

        <NoteList
          addNote={addNote}
          handleNoteText={handleNoteText}
          noteText={noteText}
          notes={notes.filter((note) => note.text.includes(searchText))}
          handleDeleteNote={handleDeleteNote}
        />
      </div>
    </>
  );
}

export default App;

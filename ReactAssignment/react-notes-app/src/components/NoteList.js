import React from 'react'
import AddNote from './AddNote'
import Note from './Note'


function NoteList({notes,addNote,noteText,handleNoteText,handleDeleteNote}) {
    
  return (
    <div className='notes-container'>
        <AddNote addNote={addNote} noteText={noteText} handleNoteText={handleNoteText} />
        {notes.map(note => <Note key={note.id} handleDeleteNote={handleDeleteNote} note={note} /> )}
              </div>
  )
}

export default NoteList
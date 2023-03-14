import { nanoid } from '@reduxjs/toolkit';
import React, { useRef } from 'react'
import {useDispatch} from 'react-redux'
import { createNote } from '../redux/slices/notesSlice';

function CreateNote() {
const titleRef = useRef(null);
const descRef = useRef(null);
const dispatch = useDispatch();

function handleSubmit(e){
e.preventDefault();
const title= titleRef.current.value;
const desc = descRef.current.value;
dispatch(createNote({
    title,
    desc,
    id:nanoid(10)
}))
}

  return (
    <div>
        <form onSubmit={handleSubmit}>
<input type="text" placeholder='enter title here' ref={titleRef}/>
<input type="text" placeholder='enter description here' ref={descRef}/>
<input type="submit" onClick={handleSubmit} />

        </form>

    </div>
  )
}

export default CreateNote
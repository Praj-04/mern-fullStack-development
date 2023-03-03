import React from 'react'
import { useNavigate } from 'react-router-dom';

function Incorrect() {
const navigate = useNavigate();

function handleLogin(e){
e.preventDefault();
navigate('/')
}

  return (
    <>
    <h1>The User credentials entered is Incorrect!!Try again</h1>
    <button onClick={handleLogin}>Login</button>
    </>
  )
}

export default Incorrect
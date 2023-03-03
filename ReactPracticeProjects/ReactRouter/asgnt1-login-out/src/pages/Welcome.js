import React from 'react'
import {  useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function Welcome() {

  const location = useLocation();
  const navigate = useNavigate();

  function handleLogout(e){
e.preventDefault();
navigate('/logout')
  }
 
  return (
    <>
    <h1> Welcome {location.state.name}</h1>
   
   <button onClick={handleLogout}>Logout</button>
    </>
  )
}

export default Welcome
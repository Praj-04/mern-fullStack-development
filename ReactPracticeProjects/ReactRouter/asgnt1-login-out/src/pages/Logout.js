import React from 'react'
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();

  function handleLogin(e){
  e.preventDefault();
  navigate('/')
  }

  return (
    <div>
      
      <h1>You have been Logged OUT!!!</h1>
      <button onClick={handleLogin}>Login</button>




    </div>
  )
}

export default Logout
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Home.css'

function Home() {

const [user,setUser] = useState();
const [paswd,setPaswd] = useState();
const navigate = useNavigate();

  function handleUserChange(e){
e.preventDefault();
setUser(e.target.value);
  }


  function handlePswdChange(e){
    e.preventDefault();
    setPaswd(e.target.value);
  }

function handleAuthentication(e){
  e.preventDefault();
//  console.log('HEre')
//  console.log(user)
//  console.log(paswd)
  if(user=='Prajna' & paswd==123){
    console.log('ok');
navigate('/welcome', {
  state: {
    name: user,
  }
});
  }
  else{
    navigate('/incorrect')
  }
}

  return (
    <div className='home-page'>
       <div className="login-box">
        <h2>Login</h2>
        <form className='form-style' onSubmit={handleAuthentication}>
          <label className='label-style' htmlFor="username">Username: </label>
          <input className='input-style' id="username" type="text" onChange={handleUserChange} placeholder="enter username" />
          <br />
          <label className='label-style' htmlFor="">Password: </label>
          <input className='input-style' type="password" onChange={handlePswdChange}/>
          <br />
          <input className='submit-style' type="submit"  value="Submit" onClick={handleAuthentication} />
          </form>
       </div>

    </div>
  )
}

export default Home
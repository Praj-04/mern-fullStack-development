import React from 'react'
import'./ProfileCard.css'

function ProfileCard(props) {

   

  return (
   
    <div className='box'>

<div className='img-style'>
        <img className='single-img' src={props.pic} alt="pictures of box" />
        </div>
        <p>{props.line}</p>
        </div>

   
  )
}

export default ProfileCard
import React from 'react'
import Button from './Button'

function Card(props) {
  return (
    <div className='cardStyle'>
        <img style={{width:'30px',height:'30px'}} src={props.image} alt={props.alt} />
        <h3>{props.heading}</h3>
        <p style={{fontSize:'0.9rem',color :'grey'}}>{props.para}</p>
        <Button data={"Learn more"}/>
    </div>
  )
}

export default Card
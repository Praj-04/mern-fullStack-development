import React from 'react'
import { BsArrowRightShort } from 'react-icons/bs';

function Button(props) {
  return (
    <div>
        <button className='buttonStyle'> {props.data} <BsArrowRightShort style={{color:'blue'}}/> </button>
    </div>
  )
}

export default Button
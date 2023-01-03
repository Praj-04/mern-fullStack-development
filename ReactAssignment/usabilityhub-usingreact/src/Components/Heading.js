import React from 'react'
import Button from './Button'

function Heading() {
    const info = "See all features"
  return (
    <div className="heading">
        <p style={{padding:'5px',fontWeight:'500',fontSize:'1.5rem'}}>Your user research Swiss Army Knife</p>
        <Button style={{padding:'5px'}} data={info}/>
    </div>
  )
}

export default Heading
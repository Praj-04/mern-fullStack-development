import React from 'react'
import { useParams } from 'react-router-dom'

function DisplayRest() {
    const param = useParams();
    
  return (
    <div>The restaurant is {param.id}</div>
  )
}

export default DisplayRest
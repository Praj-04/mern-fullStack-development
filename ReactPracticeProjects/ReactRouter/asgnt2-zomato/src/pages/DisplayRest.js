import React from 'react'
import { Outlet, useParams } from 'react-router-dom'

function DisplayRest() {
    const param = useParams();
    
    // useEffect(()=>{

    // },[param])
  return  <Outlet /> ?  <Outlet /> :<div>The restaurant is {param.id} </div> 
    
   
{/* <div>The restaurant is {param.id} </div> ? <div>The restaurant is {param.id} </div> : <Outlet /> */}

// { !<Outlet /> ? <div>The restaurant is {param.id} </div> : <Outlet /> }

    // <div>The restaurant is {param.id}
    // <Outlet />
    // </div>
  
}

export default DisplayRest
import React from "react";

function Header({ setDarkMode }) {

 
  return (
    <div className="header">
      <h1> Notes</h1>

      <div className="check">
        <input id="check" type="checkbox" />
        <label htmlFor="check" onClick={()=> setDarkMode((previousState)=> !previousState)}></label>
      </div>
    </div>
  );
}

export default Header;

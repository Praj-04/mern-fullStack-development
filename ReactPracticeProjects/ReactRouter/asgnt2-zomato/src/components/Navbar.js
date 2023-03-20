import React, { useEffect, useState } from "react";
import { FaSearchLocation } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import "./Navbar.css";
import { useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const [city, setCity] = useState("mangalore");
  const [type,setType] = useState("delivery")
  const navigate = useNavigate();
  const loc = useLocation();

useEffect(()=>{
   navigate(`/restaurant/${city}`);
},[city])

  function handleCity(e) {
    try {
      e.preventDefault();
      console.log(e.target.value);
      const newCity = e.target.value;
      setCity(newCity);
      console.log(city);
      navigate(`/restaurant/${city}`);
    } catch (e) {
      console.log(e);
    }
  }

function handleType(e){
e.preventDefault();
setType(e.target.value);
console.log(loc.pathname)
navigate(`/restaurant/${city}/${type}`);



}

  return (
    <div className="nav-bar">
      <div className="first-row">
        <div className="logo">zomato</div>

        <div className="search-section">
          <div className="left-dropDown">
            <span className="icon-style">
              {" "}
              <FaSearchLocation />{" "}
            </span>
            <select className="options-style" onChange={handleCity}>
              <option value="mangalore">Mangalore</option>
              <option value="bangalore">Bangalore</option>
              <option value="delhi">Delhi</option>
            </select>
          </div>

          <form className="right-searchBar">
            <span className="icon-style">
              {" "}
              <AiOutlineSearch />
            </span>
            <input
              className="options-style"
              type="text"
              placeholder="Search for restaurant,cuisine or a dish"
            />
          </form>
        </div>

        <p className="click">Log in</p>
        <p className="click"> Sign up</p>
      </div>

      <div className="second-row">
        <button className="inner-option" value="delivery" onClick={handleType}>Delivery</button>
        <button className="inner-option" value="dine-out" onClick={handleType}>Dining Out</button>
        <button className="inner-option" value="night-life" onClick={handleType}>NightLife</button>
      </div>
    </div>
  );
}

export default Navbar;

import React from "react";
import "./BannerPart.css";
import logo from "./movies2.jpg";

function BannerPart() {
  return (
    <div className="banner">
      <div className="container">
        <div className="logo">
          <img  src={logo} alt="movie-logo" />
        </div>
        <div className="options">
          <p className="option-link">Home</p>
          <p className="option-link">Top100</p>
          <p className="option-link">SavedMovies</p>
        </div>
      </div>
    </div>
  );
}

export default BannerPart;

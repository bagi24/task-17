import React from "react";
import Harry from "../images/harrypotter.0.jpg";

const HarryPotterPhoto = () => {
  return (
    <div className="harry-container">
      <h1 className="harry-heading">Harry Potter</h1>
      <img className="harry-image" src={Harry} alt="Harry Potter" />
    </div>
  );
};

export default HarryPotterPhoto;

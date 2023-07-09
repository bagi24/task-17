import React from "react";

const Fact = ({ fact }) => {
  return (
    <div className="fact-container">
      <h2 className="fact-heading">Fact #{fact.id}</h2>
      <p className="fact-text">{fact.text}</p>
      <div> {fact.photo}</div>
    </div>
  );
};

export default Fact;

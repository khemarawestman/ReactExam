// src/components/Card/Card.jsx
import React from 'react';

const Card = ({ id, cardHolderName, cardNumber, validThru, vendor, isActive, onClick }) => {
  const handleClick = () => {
    onClick(id);
  };

  return (
    <div className={`card ${isActive ? 'active' : ''}`} onClick={handleClick}>
      <div className="vendor">{vendor}</div>
      <div className="cardNumber">{cardNumber}</div>
      <div className="cardHolderName">{cardHolderName}</div>
      <div className="validThru">{validThru}</div>
    </div>
  );
};

export default Card;

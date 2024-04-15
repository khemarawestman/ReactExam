
import React from 'react';
import '../Card/Card.css';
import VendorStyles from '../../VendorStyles'; 

const Card = ({ cardNumber, cardHolderName, validThru, vendor }) => {
  const formattedCardNumber = cardNumber.replace(/(.{4})/g, '$1 ').trim();
  
  const { logo, color } = VendorStyles[vendor] || VendorStyles.default;

  return (
    <div className="card" style={{ backgroundColor: color }}>
      <div className="card-logo-section">
        <img src={logo} alt="Vendor" className="card-vendor-logo" />
      </div>
      <div className="card-number">{formattedCardNumber || 'XXXX XXXX XXXX XXXX'}</div>
      <div className="card-holder">{cardHolderName.toUpperCase() || 'FULL NAME'}</div>
      <div className="card-expiry">
{validThru || 'MM/YY'}</div>
    </div>
  );
};

export default Card;

// CardPreview.jsx
import React from 'react';
import './CardPreview.css'

const CardPreview = ({ cardDetails }) => {
  const { cardNumber, cardHolderName, validThru, vendor } = cardDetails;
  const formattedCardNumber = cardNumber.replace(/(.{4})/g, '$1 ').trim();

  
  const vendorClass = vendor ? `vendor-${vendor.toLowerCase()}` : '';

  return (
    <div className={`card-preview ${vendorClass}`}>
      <div className="card-top-section">
        <div className="card-vendor-logo">{/* Logo based on vendor */}</div>
        <div className="card-chip-icon"></div>
      </div>
      <div className="card-number">{formattedCardNumber || 'XXXX XXXX XXXX XXXX'}</div>
      <div className="card-holder">
        <label>CARDHOLDER NAME</label>
        <div>{cardHolderName || 'FIRSTNAME LASTNAME'}</div>
      </div>
      <div className="card-expiry">
        <label>VALID THRU</label>
        <div>{validThru || 'MM/YY'}</div>
      </div>
    </div>
  );
};

export default CardPreview;

import React from 'react';
import './CardPreview.css';

const CardPreview = ({ cardDetails }) => {
  const { cardNumber, cardHolderName, validThru, vendor } = cardDetails;
  const formattedCardNumber = cardNumber.replace(/(.{4})/g, '$1 ').trim();
  
  // Construct the class name for the card based on the vendor
  const vendorClass = vendor ? `vendor-${vendor.toLowerCase()}` : '';

  return (
    <section className='card'>
    <div className={`card-preview ${vendorClass}`}>
      <div className="card-top-section">
        {/* Render vendor-specific logo here */}
        <div className={`card-vendor-logo ${vendorClass}`}></div>
        {/* Render a generic chip icon; replace with an actual image if available */}
        <div className="card-chip-icon"></div>
      </div>
      <div className="card-number">
        {formattedCardNumber || 'XXXX XXXX XXXX XXXX'}
      </div>
      <div className="card-holder">
        <label>CARDHOLDER NAME</label>
        <div>{cardHolderName.toUpperCase() || 'FIRSTNAME LASTNAME'}</div>
      </div>
      <div className="card-expiry">
        <label>VALID THRU</label>
        <div>{validThru || 'MM/YY'}</div>
      </div>
    </div>
    </section>
  );
};

export default CardPreview;

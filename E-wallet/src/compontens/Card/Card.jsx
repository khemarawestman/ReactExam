import React from 'react';
import './Card.css'; 


import ChipImage from '../../assets/chip-light.svg';
import VendorLogo from '../../assets/vendor-bitcoin.svg';

const Card = ({ cardNumber, cardHolderName, validThru, onClick }) => {
  const formattedCardNumber = cardNumber ? cardNumber.replace(/(.{4})/g, '$1 ').trim() : '#### #### #### ####';
  const handleClick = () => {
    if (onClick) onClick();
  };

  return (
    <div className="card" onClick={handleClick} role="button" tabIndex="1">
      <div className="card-logo-section">
        <img src={ChipImage} alt="Chip" className="card-chip-icon" />
        <img src={VendorLogo} alt="Vendor" className="card-vendor-logo" />
      </div>
      <div className="card-number">{formattedCardNumber}</div>
      <div className="card-info">
        <div className="card-holder-name">
          <span className="card-label">CARDHOLDER NAME</span>
          <div>{cardHolderName || 'FULL NAME'}</div>
        </div>
        <div className="card-valid-thru">
          <span className="card-label">VALID THRU</span>
          <div>{validThru || 'MM/YY'}</div>
        </div>  
      </div>
    </div>
  );
};

export default Card;

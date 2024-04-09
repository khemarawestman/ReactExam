
import React from 'react';
import './Card.css'; 


import ChipImage from '../../assets/chip-light.svg'; 
import VendorLogo from '../../assets/vendor-bitcoin.svg'; 

const Card = ({ cardNumber, cardHolderName, validThru }) => {
  
  const formattedCardNumber = cardNumber.replace(/(.{4})/g, '$1 ');

  return (
    
    <div className="card">
      <article className='card__logo'>
      <img src={VendorLogo} alt="Vendor" className="card-logo" />
      </article>

      
      <img src={ChipImage} alt="Chip" className="card-chip" />
      <div className="card-number">{formattedCardNumber}</div>

      <article className='card__fotter'>
      <div className="card-holder-name"><p>cardholder name</p><br></br>{cardHolderName}</div>
      <div className="card-valid-thru"><p>Valid /thru</p>{validThru}</div>
      </article>
      
    </div>
  );
};

export default Card;

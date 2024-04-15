import React from 'react';
import './CardPreview.css'; 
import VendorStyles from '../../VendorStyles';

const CardPreview = ({ cardDetails }) => {
  const { cardNumber, cardHolderName, validThru, vendor } = cardDetails;
  const formattedCardNumber = cardNumber.replace(/(.{4})/g, '$1 ').trim();
  const vendorStyle = VendorStyles[vendor] || VendorStyles.default;

  return (
    <section className='card-container'>
      <div className="card-preview" style={{ backgroundColor: vendorStyle.color }}>
        <div className="card-preview-top">
          <img src={vendorStyle.logo} alt="Vendor Logo" className="preview-vendor-logo"/>
          <div className="preview-chip-icon"></div>
        </div>

        <div className="preview-card-number">
          {formattedCardNumber || 'XXXX XXXX XXXX XXXX'}
        </div>
        <article className='preview-card-holder__preview-card-expiry'>
        <div className="preview-card-holder">
          <label>CARDHOLDER NAME</label>
          <div>{cardHolderName.toUpperCase() || 'FIRSTNAME LASTNAME'}</div>
        </div>

        <div className="preview-card-expiry">
          <label>VALID THRU</label>
          <div>{validThru || 'MM/YY'}</div>
        </div>
        </article>
      </div>
    </section>
  );
};

export default CardPreview;

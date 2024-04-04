// src/views/AddCard/AddCard.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCard } from '../../cardSlice';
import './AddCard.css';
import CardPreview from '../CardPreview/CardPreview';
const AddCard = () => {
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    cardHolderName: '',
    validThru: '',
    ccv: '',
    vendor: '',
  });
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails(prevDetails => ({ ...prevDetails, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCard({ ...cardDetails, id: Date.now() }));
    setCardDetails({ cardNumber: '', cardHolderName: '', validThru: '', ccv: '', vendor: '' });
  };

  return (
    <div className="add-card-container">
      <div className="add-card-header">
        <h2>ADD A NEW BANK CARD</h2>
      </div>
      <CardPreview cardDetails={cardDetails} />
      <form onSubmit={handleSubmit} className="add-card-form">
        <input 
          type="text" 
          name="cardNumber" 
          placeholder="CARD NUMBER" 
          value={cardDetails.cardNumber} 
          onChange={handleInputChange} 
        />
        <input 
          type="text" 
          name="cardHolderName" 
          placeholder="CARDHOLDER NAME" 
          value={cardDetails.cardHolderName} 
          onChange={handleInputChange} 
        />
        <div className="expiry-cvv">
          <input 
            type="text" 
            name="validThru" 
            placeholder="VALID THRU" 
            value={cardDetails.validThru} 
            onChange={handleInputChange} 
          />
          <input 
            type="text" 
            name="ccv" 
            placeholder="CCV" 
            value={cardDetails.ccv} 
            onChange={handleInputChange} 
          />
        </div>
        <select 
          name="vendor" 
          value={cardDetails.vendor} 
          onChange={handleInputChange}
        >
          {/* Options should be dynamically generated based on available vendors */}
          <option value="">VENDOR</option>
          <option value="vendor1">Vendor 1</option>
          <option value="vendor2">Vendor 2</option>
          {/* ... other vendor options */}
        </select>
        <button type="submit" className="add-card-button">ADD CARD</button>
      </form>
    </div>
  );
};

export default AddCard;
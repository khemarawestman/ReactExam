
import React from 'react';
import { Link } from 'react-router-dom';
import './Top.css'; 
const Top = () => {
  return (
    <div className="top-nav">
        <h1>E-WalLet</h1>
      <Link to="/">Home</Link>
      <Link to="/addcard">Add New Card</Link>
      
     
    </div>
  );
};

export default Top;

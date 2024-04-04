// src/components/Top/Top.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Top.css'; 
const Top = () => {
  return (
    <div className="top-nav">
      <Link to="/">Home</Link>
      <Link to="/addcard">Add New Card</Link>
      {/* You can add more navigation links if you want */}
    </div>
  );
};

export default Top;

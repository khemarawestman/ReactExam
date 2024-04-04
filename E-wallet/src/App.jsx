// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Addcard from './compontens/AddCard/AddCard'
import Home from './compontens/Home/Home';
import Top from './compontens/Top/Top';

const App = () => (
<Router>
    <Top /> 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/addcard" element={<Addcard />} />
    </Routes>
  </Router>
);


export default App;

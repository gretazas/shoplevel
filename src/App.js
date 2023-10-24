import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Subtotal from './Subtotal';

function App() {
  return (
    // BEM
    <Router>
      <div className="app">
        <Routes>
        <Route exact path="/" element={<><Header/><Home/></>}/>
        <Route exact path="/checkout" element={<><Header/><Subtotal/><Checkout/></>}/> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;

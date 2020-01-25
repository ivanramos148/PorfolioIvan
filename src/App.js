import React from 'react';
import Navbar from './Component/Navbar.js';
import Header from './Component/Header.js';
import Body from './Component/Body.js';
import Footer from './Component/Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import logo from './logo.jpeg'

// import NavBar from './components/NavBar'
import Orders from './components/Orders'


function App() {
  return (
    <div className="container">
      <img
        src={logo}
        alt="Metric"
        style={{ width: 200, display: 'block', margin: 'auto' }}
      />

      <Orders />
    </div>
  );
}

export default App;

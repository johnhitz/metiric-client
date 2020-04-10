import React from 'react';
import './App.css';
import logo from './logo.jpeg'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <img
        src={logo}
        alt="Metric"
        style={{ width: 200, display: 'block', margin: 'auto' }}
      />
    </div>
  );
}

export default App;

import React from 'react';
import logo from './af1-logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Nike Air Force 1
        </p>
        <a
          className="App-link"
          href="#"
          rel="noopener noreferrer"
        >
          Buy!
        </a>
      </header>
    </div>
  );
}

export default App;

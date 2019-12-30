import React from 'react';
import ConditionalSection from './sections/conditional'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Bienvenidos al curso de react</h2>
        <img src={logo} className="App-logo" alt="logo" />
        <ConditionalSection />
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Bienvenidos al curso de react</h2>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h3>Vamos a aprender React</h3>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Hola mundo, estoy usando react</p>
        <strong>This is a strong</strong>
      </header>
    </div>
  );
}

// class App extends Component {
//   render () {
//     return (
//       <div className='App'>        
//       </div>
//     )
//   }
// }

export default App;

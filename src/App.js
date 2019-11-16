import React, {Component} from 'react';
import './App.css';

class Contador extends Component {
  state = { contador: 1}

  render() {
    return <span>{this.state.contador}</span>
  }
}


function App() {
  return (
    <div className="App">
      <p>Primer componente con State</p>
      <Contador />
    </div>
  );
}

export default App;

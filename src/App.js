import React, {Component} from 'react';
import './App.css';

class Contador extends Component {

  constructor() {
    super()
    this.state = { contador: 1}

    setInterval(() => {
      this.setState(
        {contador: this.state.contador + 1})
    }, 1000)
  
  }

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

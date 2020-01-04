import React, {Component} from 'react';
import CicloDeActualizacion from './sections/life-cycle/cicloDeActualizacion'
import './App.css';


class App extends Component {
  render () {
    return (
      <div className='App'>
        <CicloDeActualizacion />     
      </div>
    )
  }
}

export default App;

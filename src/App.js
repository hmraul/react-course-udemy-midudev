import React, {Component} from 'react';
import ComponentDidCatch from './sections/life-cycle/componentDidCatch'
import './App.css';

class App extends Component {
  render () {
    return (
      <div className='App'>
        <ComponentDidCatch />              
      </div>
    )
  }
}

export default App;

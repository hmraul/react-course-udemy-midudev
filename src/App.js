import React, {Component} from 'react';
import PropTypes from 'prop-types'
import './App.css';
import BitCoinPrice from './sections/container-component/BitCoinPrice';

class App extends Component {
  render () {
    return (
      <div className='App'>
        <BitCoinPrice />       
      </div>
    )
  }
}

export default App;

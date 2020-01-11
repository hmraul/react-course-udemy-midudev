import React, {Component} from 'react';
import './App.css';
// import BitCoinPrice from './sections/container-component/BitCoinPrice';
import BitCoinPriceContainer from './sections/container-component/BitCoinPriceContainer';

class App extends Component {
  render () {
    return (
      <div className='App'>
        {/* <BitCoinPrice /> */}
        <h4>Bitcoin Price Index</h4>
        <BitCoinPriceContainer />           
      </div>
    )
  }
}

export default App;

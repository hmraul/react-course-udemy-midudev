import React, {Component} from 'react';
import FetchApi from './components/fetchApi'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <FetchApi />       
      </div>
    )
  }
}

export default App;

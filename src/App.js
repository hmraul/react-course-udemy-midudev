import React, {Component} from 'react';
import './App.css';

class Box extends Component {
  render () {
    return (<div
    style = {{
      border: '1px solid #000',
      margin: 5,
      padding: 5
    }}>
      {this.props.children}
    </div>
    )}
}



class App extends Component {
  render () {
    return (
      <div className='App'>
        <h4>Pobando Prop children</h4>
        <Box>
          Hola! Soy un children
        </Box>
        <Box>
          Viva Murcia
        </Box>       
      </div>
    )
  }
}

export default App;

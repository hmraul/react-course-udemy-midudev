// import React from 'react';
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

// function Hello(props) {
//   return <h2>{props.title}</h2>
// }

// const Hello = (props) => <h2>{props.title}</h2>

class Hello extends Component {
  render() {
    return <h2>{this.props.title}</h2>
  }
}

class Text extends Component {
  render() {

    // const textDependsOn = this.props.boolean ? 'Cierto' : 'Falso';
    const doubleNumbers = this.props.numbers.map(n => n * 2)

    return (
      <div>
        {/* <p>{this.props.text}</p>
        <p>{this.props.number}</p>
        <p>{textDependsOn}</p> */}
        <p>{this.props.complexObject.key1}</p>
        <p>{this.props.numbers}</p>
        <p>{this.props.numbers.join(',  ')}</p>
        <p>{doubleNumbers.join(',  ')}</p>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello title='Hello from props'/>
        <Text 
          boolean
          complexObject = {{key1:'value1', key2:'value2'}}
          number={2} 
          numbers={[2, 3, 10]}
          text='Text from component' 
        />
      </header>
    </div>
  );
}

export default App;

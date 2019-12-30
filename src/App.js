import React, {Component} from 'react';
import './App.css';
import cars from './data/cars.json'

class CarItem extends Component {
  render () {
    const {car} = this.props

    return (<li key={car.id}>
      <p><strong>Modelo:</strong>{car.model}</p>
      <p><strong>Marca:</strong>{car.company}</p>
      </li>
    )
  }
}

class App extends Component {
  render () {
    return (
      <div className='App'>
        <h4>Trabajando con listas de objetos</h4>
        <ul>
          {
            cars.map(car => {
              return <CarItem key={car.id} car = {car} />
            })
          }
        </ul>
      </div>
    )
  }
}

class SimpleListApp extends Component {
  render () {
    const numbers = [1, 1, 3, 4, 5];
    return (
      <div className='App'>
        <h4>Trabajando con listas</h4>
        {numbers.map((number, index) =>{
        return <p key={index}>Soy el número {number}</p>
        })}
      </div>
    )
  }
}

export default App;

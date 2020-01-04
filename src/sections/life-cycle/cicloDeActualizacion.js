import React, {Component, PureComponent} from 'react';
import PropTypes from 'prop-types'

const ANIMAL_IMAGES = {
  tiger: 'https://i.ytimg.com/vi/DF4b1Ktc_uc/maxresdefault.jpg',
  hypo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8z1pzC0hDdCOOzquigTqeppCh1bgHmd7YUhwThiU6TrVRT37Yxw&s',
  monkey: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Macaca_nigra_self-portrait.jpg'
}
const ANIMALS = Object.keys(ANIMAL_IMAGES)

class Animal extends PureComponent {
  static propTypes = {
    animal: PropTypes.oneOf(ANIMALS)
  }

  state = {src: ANIMAL_IMAGES[this.props.animal] }

  static getDerivedStateFromProps(props, state) {
    return (props.animal !== state.animal)
    ? {animal: props.animal, src: ANIMAL_IMAGES[props.animal]}
    : null
  }

  render() {
    console.log('-> render')
    return (
      <div>
        <p>Selected {this.props.animal}</p>
        <img
          alt = {this.props.animal}
          src = {this.state.src}
          width = '250' />
      </div>
    )
  }
}

class CicloDeActualizacion extends Component {
  state = {animal: 'monkey'}

  _renderAnimalButton = (animal) => {
  return (
    <button 
      // disabled = {animal === this.state.animal}
      key={animal} 
      onClick={() => this.setState({animal: animal})}>
      {animal}
    </button>
    )
  }

  render () {
    return (
      <div>
        <h4>Ejemplo de ciclo de actualización</h4>
        {ANIMALS.map(this._renderAnimalButton)}
        <Animal animal={this.state.animal}/>
      </div>
    )
  }
}

export default CicloDeActualizacion;
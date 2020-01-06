import React, {Component} from 'react';

class ComponentADesmontar extends Component {
  state = { windowWidth: 0 }

  _updateStateWithWindowWidth = () => {
    this.setState({ windowWidth: document.body.clientWidth })
  }

  componentDidMount() {
    this._updateStateWithWindowWidth()
    window.addEventListener(
      'resize',
      this._updateStateWithWindowWidth
    )
  }

  componentWillUnmount() {
    window.removeEventListener(
      'resize',
      this._updateStateWithWindowWidth
    )
  }

  render () {
     return (
      <div >
        <p>Ancho de la ventana: {this.state.windowWidth}</p>      
      </div>
    )
  }
}

class ComponentWillUnmount extends Component {
  state = {mostrarComponente: true}
  render () {
    if (this.state.mostrarComponente) {
      return (
        <div >
          <h4>Ejemplo de ComponentWillUnmount</h4>          
          <ComponentADesmontar />
          <button onClick= {() => this.setState({mostrarComponente: false})} >
            Desmontar
          </button> 
        </div>
      )
    }

    return <p>Componente Desmontado</p>

  }
}

export default ComponentWillUnmount;
import React, {Component} from 'react';

class ErrorButton extends Component {
  state = {throwError: false}

  render () {
    if (this.state.throwError) {
      throw new Error("Error lanzado por el botón")
    }

    return (
      <button onClick={() => this.setState({throwError: true})}>
        Lanzar error
      </button>
    )
  }
  
}

class ComponentDidCatch extends Component {
  state = {hasError: false, errorMsg: ''}
  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true, errorMsg: error.toString() })
  }

  render () {
    if(this.state.hasError) {
      return ( 
        <div>
        <h4>Ha ocurrido un error en el componente {this.state.errorMsg}</h4>
        <button onClick={() => this.setState({hasError: false})}>
          Volver a la aplicación
        </button>
      </div>
      )      
    }

    return (
      <div >        
        <h4>componentDidCatch sample</h4>
        <ErrorButton /> 
      </div>
    )
  }
}

export default ComponentDidCatch;
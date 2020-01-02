import React, {Component} from 'react'

export default class Form extends Component {
  constructor() {
    super()
    this.state = {
      inputName: '',
      inputTwitter: '@',
      inputTerms: false
    }
  }
  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <h4>Formulario</h4>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label htmlFor='name' >Nombre: </label>
            <input
              id = 'name'
              name = 'userName'
              placeholder = 'Introduce el nombre'
              onChange = {e => this.setState({inputName: e.target.value})}
              ref={inputElement => this.inputName = inputElement} 
              value = {this.state.inputName} />
          </p>
          <p>
            <label htmlFor='twitter' >Twitter: </label>
            <input
              id = 'twitter'
              name = 'twitterAccount'
              placeholder = 'Introduce tu usuario de twitter'
              onChange = {e => this.setState({inputTwitter: e.target.value})}
              ref={inputElement => this.inputTwitter = inputElement} 
              value = {this.state.inputTwitter}/>
          </p>
          <p>
            <label>
              <input
                id = 'terms'
                onChange = {e => this.setState({inputTerms: e.target.checked})} 
                type='checkbox'
                checked = {this.state.inputTerms}/>
              Accepted terms
            </label>
          </p>
          <button>Enviar</button>
        </form>
      </div>
    )}
}
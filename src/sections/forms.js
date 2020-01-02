import React, {Component} from 'react'

export default class Form extends Component {
  handleClick = (e) => {
    e.preventDefault()
    const name = this.inputName.value
    const twitter = document.getElementById('twitter').value
    console.log({name,twitter})
  }

  render() {
    return (
      <div>
        <h4>Formulario</h4>
        <form>
          <p>
            <label htmlFor='name' >Nombre: </label>
            <input
              id = 'name'
              name = 'userName'
              placeholder = 'Introduce el nombre'
              ref={inputElement => this.inputName = inputElement} />
          </p>
          <p>
            <label htmlFor='twitter' >Twitter: </label>
            <input
              id = 'twitter'
              name = 'twitterAccount'
              placeholder = 'Introduce tu usuario de twitter' 
              ref={inputElement => this.inputTwitter = inputElement} />
          </p>
          <button onClick={this.handleClick}>Enviar</button>
        </form>
      </div>
    )}
}
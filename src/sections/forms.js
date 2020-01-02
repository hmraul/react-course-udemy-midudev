import React, {Component} from 'react'

export default class Form extends Component {
  handleClick = (e) => {
    e.preventDefault()
    const name = document.getElementById('name').value
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
              placeholder = 'Introduce el nombre' />
          </p>
          <p>
            <label htmlFor='twitter' >Twitter: </label>
            <input
              id = 'twitter'
              name = 'twitterAccount'
              placeholder = 'Introduce tu usuario de twitter' />
          </p>
          <button onClick={this.handleClick}>Enviar</button>
        </form>
      </div>
    )}
}
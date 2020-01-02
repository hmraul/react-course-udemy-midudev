import React, {Component} from 'react'

export default class Form extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    const name = this.inputName.value
    const twitter = document.getElementById('twitter').value
    console.log({name,twitter})
  }
  hadleTerms = (e) => {
    console.log('handleTerms')
    console.log(e.target.checked)
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
          <p>
            <label>
              <input onChange={this.hadleTerms} type='checkbox'/>
              Accepted terms
            </label>
          </p>
          <button>Enviar</button>
        </form>
      </div>
    )}
}
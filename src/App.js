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

class Article extends Component {
  constructor(props) {
    super(props)
     if (typeof(props.author === 'undefined')) {
       console.warn('author prop is required')
       // Si quieres forzar a que sea estricto (NO RECOMENDABLE) 
       // se puede lanzar un error
       // Ej:
       // throw new Error('author prop is required')
     }
  }
  render() {
    const { author, children, date, title } = this.props

    return(
      <section>
        <h2>{title}</h2>
        {author && <p><em>Escrito por {author}</em></p>}
        <Box>{date}</Box>
        <article>{children}</article>
      </section>  
    )
  }
}

class App extends Component {
  render () {
    return (
      <div className='App'>
        <h4>Pobando Prop children</h4>
        <Article
          author='Raul'
          date = {new Date().toLocaleDateString()}
          title = 'Curso de React'
        >
          <p>El contenido es dinámico para todos los posibles articles</p>
          <strong>Podemos añadir varios elementos</strong>
        </Article>
        <Article
          date = {new Date().toLocaleDateString()}
          title = 'Usando la prop children'
        >
          <p>Aquí el contenido cambia</p>
          <img 
          src= 'https://imaging.nikon.com/lineup/dslr/d600/img/sample01/img_01.png'
          alt = '' />
        </Article>       
      </div>
    )
  }
}

export default App;

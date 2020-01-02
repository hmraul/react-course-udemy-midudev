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
  render() {
    return(
      <section>
        <h2>{this.props.title}</h2>
        <p><em>Escrito por {this.props.author}</em></p>
        <Box>{this.props.date}</Box>
        <article>{this.props.children}</article>
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
          author='Raul'
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

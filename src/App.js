import React, {Component} from 'react';
import PropTypes from 'prop-types'
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
  static propTypes = {
    author: PropTypes.string.isRequired,
    date: PropTypes.string,
    title: PropTypes.string
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
          date = {new Date().toLocaleDateString()}
          title = 'Curso de React'
        >
          <p>El contenido es dinámico para todos los posibles articles</p>
          <strong>Podemos añadir varios elementos</strong>
        </Article>
      </div>
    )
  }
}

export default App;

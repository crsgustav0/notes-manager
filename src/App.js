import React, { Component } from 'react';

import FormularioCadastro from './components/FormularioCadastro';
import ListaNotas from './components/ListaNotas';
import "./assets/App.css";
import "./assets/index.css";

class App extends Component {

  criarNota(titulo, texto) {
    console.log(`Nota ${titulo} ${texto}`)
  }

  render() {
    return (
      <section className='conteudo'>
        <FormularioCadastro
          criarNota={this.criarNota}
        />
        <ListaNotas />
      </section>
    );
  }
}

export default App;

import React, { Component } from 'react';

import FormularioCadastro from './components/FormularioCadastro';
import ListaNotas from './components/ListaNotas'; 
import "./assets/App.css";
import "./assets/index.css";

class App extends Component {
  render() {
    return (
      <section className='conteudo'>
        <FormularioCadastro />
        <ListaNotas />
      </section>
    );
  }
}

export default App;

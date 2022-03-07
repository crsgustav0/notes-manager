import React, { Component } from 'react';

import FormularioCadastro from './components/FormularioCadastro';
import ListaNotas from './components/ListaNotas';
import "./assets/App.css";
import "./assets/index.css";

class App extends Component {

  constructor() {
    super()
    this.notas = [];
  }

  criarNota(titulo, texto) {
    // Criação de novo objeto
    const novaNota = { titulo, texto }
    // Inclusão do objeto 'novaNota' ao array 'notas' via função 'push()'
    this.notas.push(novaNota);
    console.log(novaNota)
  }

  render() {
    return (
      /*
      bind -  Associa o comportamento do componente a instância do método criada em seu módulo
      */ 
      <section className='conteudo'>
        <FormularioCadastro
          criarNota={this.criarNota.bind(this)}
        />
        <ListaNotas notas={this.notas}
        />
      </section>
    );
  }
}

export default App;

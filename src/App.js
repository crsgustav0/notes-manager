import React, { Component } from 'react';
import ListaNotas from './components/ListaNotas';
import FormularioCadastro from './components/FormularioCadastro';
import ListaCategorias from './components/ListaCategorias';
import "./assets/App.css";
import "./assets/index.css";
import Categorias from './data/Categorias';
import ArrayNotas from './data/Notas';

class App extends Component {

  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super()
    this.categorias = new Categorias();
    this.notas = new ArrayNotas();
    // state - Propriedade 'React' que ao ser executada chama automaticamente a função 'render()'
  }

  render() {
    return (
      /*
      bind -  Associa o comportamento do componente a instância do método criada em seu módulo
      */
      <section className='conteudo'>
        <FormularioCadastro
          categorias={this.categorias}
          criarNota={this.notas.adicionarNotas.bind(this.notas)}
        />
        <main>
          <ListaCategorias
            adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}
            className='conteudo-principal'
            categorias={this.categorias.categorias}
          />
          <ListaNotas
            apagarNota={this.notas.deletarNota.bind(this.notas)}
            notas={this.notas}
          />
        </main>
      </section>
    );
  }
}

export default App;

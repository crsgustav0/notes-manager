import React, { Component } from 'react';
import ListaNotas from './components/ListaNotas';
import FormularioCadastro from './components/FormularioCadastro';
import ListaCategorias from './components/ListaCategorias';
import "./assets/App.css";
import "./assets/index.css";
import Categorias from './data/Categoria';
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
          categorias={this.categorias.categorias}
          criarNota={this.notas.criarNota}
        />
        <main>
          <ListaCategorias
            adicionarCategoria={this.adicionarCategoria}
            className='conteudo-principal'
            categorias={this.categorias.categorias}
          />
          <ListaNotas
            apagarNota={this.notas.deletarNota}
            notas={this.notas.notas}
          />
        </main>
      </section>
    );
  }
}

export default App;

import React, { Component } from 'react';

import FormularioCadastro from './components/FormularioCadastro';
import ListaNotas from './components/ListaNotas';
import ListaCategorias from './components/ListaCategorias';
import "./assets/App.css";
import "./assets/index.css";

class App extends Component {

  constructor() {
    super()
    // state - Propriedade 'React' que ao ser executada chama automaticamente a função 'render()'
    this.state = {
      notas: [],
      categorias: [],
    };
  }

  criarNota(titulo, texto) {
    // Criação de novo objeto
    const novaNota = { titulo, texto }
    //Recebe todo o conteudo e atribui a uma variável 
    const novoArrayNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      notas: novoArrayNotas
    }
    /*
    State: Serve para guardar valores/estado que podem vir a mudar com a interação do usuário com o componente,
    */
    this.setState(novoEstado)
  }

  deletarNota(index) {
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index, 1)
    this.setState({ nota: arrayNotas })
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
        <main>
          <ListaCategorias
            className='conteudo-principal'
          />
        </main>
        <ListaNotas
          apagarNota={this.deletarNota.bind(this)}
          notas={this.state.notas}
        />
      </section>
    );
  }
}

export default App;

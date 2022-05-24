import React, { Component } from "react";
import CardNota from "../CardNota";
import './estilo.css'

/*
    {} - Entende como comando JS
*/
class ListaNotas extends Component {

  constructor() {
    super()
    this.setState = { notas: [] }
    this._novasNotas = this._novasNotas.bind(this)
  }

  componentDidMount() {
    this.props.notas.inscrever(this._novasNotas.inscrever())
  }

  componentDidUnmount() {
    this.props.notas.inscrever(this._novasNotas.desinscrever())
  }

  _novasNotas(notas) {
    this.setState({ ...this.state, notas })
  }

  render() {
    return (
      <ul className="lista-notas">
        {
          /*
          Ao criar objeto Array, com a função 'Array' e popular com o '.of()', é possível 
          executar uma função a partir de cada item do Array, utilizando o '.map(nomeFunção)'
          */
          //Array.of('Trabalho', 'Tr'abalho', 'Estuszdos')
          this.state.notas.map((nota, index) => {
            return (
              /*Para entender o recebimento de valores via variável, 
              é necessário passar entre '{}'
              
               key - Atribui ao indentificador unico do HTML a posição do lista criada via map,
               caso tenha que ser alterado,  indentifica e faz a alteração não sendo necessário
               redesenhar a tela inteira
              */
              <li className="lista-notas_item" key={index}>
                {/* <div>{categoria} </div> */}
                <CardNota
                  indice={index}
                  apagarNota={this.props.apagarNota}
                  titulo={nota.titulo}
                  texto={nota.texto}
                  categoria={nota.categoria}
                />
              </li>
            );
          })
        }
      </ul>
    );
  }
}

export default ListaNotas;


import React, { Component } from "react";
import CardNota from "./CardNota";

/*
    {} - Entende como comando JS
*/
class ListaNotas extends Component {
  render() {
    return (
      <ul>
        {
          /*
          Ao criar objeto Array, com a função 'Array' e popular com o '.of()', é possível 
          executar uma função a partir de cada item do Array, utilizando o '.map(nomeFunção)'
          */
          Array.of('Trabalho', 'Trabalho', 'Estudos').map((categoria) => {
            return (
              /*Para entender o recebimento de valores via variável, 
              é necessário passar entre '{}'*/
              <li>
                <div>{categoria} </div>
                <CardNota />
              </li>
            );
          })
        }
      </ul>
    );
  }
}

export default ListaNotas;


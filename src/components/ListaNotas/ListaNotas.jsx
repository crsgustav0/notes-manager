import React, { Component } from "react";
import CardNota from "../CardNota";
import './estilo.css'

/*
    {} - Entende como comando JS
*/
class ListaNotas extends Component {

  render() {
    return (
      <ul className="lista-notas">
        {
          /*
          Ao criar objeto Array, com a função 'Array' e popular com o '.of()', é possível 
          executar uma função a partir de cada item do Array, utilizando o '.map(nomeFunção)'
          */
          //Array.of('Trabalho', 'Tr'abalho', 'Estuszdos')
          this.props.notas.map((nota, index) => {
            return (
              /*Para entender o recebimento de valores via variável, 
              é necessário passar entre '{}'
              
               key - Atribui ao indentificador unico do HTML a posição do lista criada via map,
               caso tenha que ser alterado,  indentifica e faz a alteração não sendo necessário
               redesenhar a tela inteira
              */
              <li className="lista-notas_item" key={index}>
                {/* <div>{categoria} </div> */}
                <CardNota titulo={nota.titulo} texto={nota.texto} />
              </li>
            );
          })
        }
      </ul>
    );
  }
}

export default ListaNotas;


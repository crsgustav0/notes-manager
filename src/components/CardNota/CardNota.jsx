import React, { Component } from 'react';
import "./estilo.css"

class CardNota extends Component {
    render() {
        return (
            /*Para fazer a estilização dos arquivos via CSS
            é necessário importar a classe via função 'className' 
            Props: Valores para a configuração de um componente, essas props são passadas pelo elemento acima 
            (que utiliza o componente que irá receber) e são imutáveis, 
            utilizado para a comunicação de componentes
            */
            <section className="card-nota">
                <header className='card-nota-cabecalho'>
                    <h3 className='card-nota_titulo'>{
                        this.props.titulo
                    }</h3>
                </header>
                <p className='card-nota_texto'>{
                    this.props.texto
                }</p>
            </section>
        );
    }
}

export default CardNota;
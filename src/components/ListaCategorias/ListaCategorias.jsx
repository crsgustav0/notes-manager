import React, { Component } from 'react';

class ListaCategorias extends Component {

    _handleEventoInput(e) {
        if (e.key == 'Enter') {
            console.log('Adicionar Categoria')
        }
    } 

    render() {
        return (
            <section>
                <ul>
                    <li>Categorias</li>
                    <li>Categorias</li>
                    <li>Categorias</li>
                    <li>Categorias</li>
                    <li>Categorias</li>
                </ul>
                <input
                    type="text"
                    placeholder='Adicionar categoria'
                    onKeyUp={this._handleEventoInput.bind(this)}
                />
            </section>
        );
    }
}

export default ListaCategorias;
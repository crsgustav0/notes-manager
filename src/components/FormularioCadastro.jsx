import React, { Component } from "react";

/*
    export - Necessário para que seja acessível a outros módulos, arquivo do projeto 
*/
class FormularioCadastro extends Component {
    /*Necessário utilizar por se tratar de um componente */
    render() {
        return ( /*form - Criação componente formulario*/
            <form>
                <h1>App React</h1>
                <input type='text' placeholder='Título'></input>
                <textarea placeholder='Escreva sua nota...' />
                <button> Criar Nota</button>
            </form>)
    }
}

export default FormularioCadastro;

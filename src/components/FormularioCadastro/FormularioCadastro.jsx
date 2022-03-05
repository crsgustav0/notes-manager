import React, { Component } from "react";
import './estilo.css'

/*
    export - Necessário para que seja acessível a outros módulos, arquivo do projeto 
*/
class FormularioCadastro extends Component {
    /*Necessário utilizar por se tratar de um componente */
    render() {
        return ( /*form - Criação componente formulario*/
            <form className="form-cadastro">
                <input
                    type='text'
                    placeholder='Título'
                    className="form-cadastro_input"
                />
                <textarea
                    rows={15}
                    placeholder='Escreva sua nota...'
                    className="form-cadastro_input"
                />
                <button className="form-cadastro_input form_cadastro_submit"
                    Criar Nota
                />
            </form>
        )
    }
}

export default FormularioCadastro;

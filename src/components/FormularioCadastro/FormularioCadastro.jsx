import React, { Component } from "react";
import './estilo.css'

/*
    export - Necessário para que seja acessível a outros módulos, arquivo do projeto 
*/
class FormularioCadastro extends Component {
    /*Criação de construtores para o armazenamento de variáveis,
    utilizando a atribuição de 'componentes' da classe 'FormularioCadastro' 
    
    props - Recebe via parâmetro a instância de sua chamada, 
    realizando a comunicação entre funções
    */
    constructor(props) {
        super(props)
        this.titulo = '';
        this.texto = '';
        this.categoria = 'Sem categoria';
        //this.props.criarNota(this.titulo, this.texto, this.categoria);
    }

    /*
    Criação de função a partir da interação de componentes, 
    passando o evento a ser tratado via parâmetro
    stopPropagation - Cancela a propagação via módulos, classe do evento do componente
    */
    _handleMudancaCategoria(evento) {
        evento.stopPropagation();
        /*Ao mudar via clique a categoria selecionada, 
        atualiza a coluna que o card sera adicionado*/
        this.categoria = evento.target.value;
    }

    /*
    Criação de função a partir da interação de componentes, 
    passando o evento a ser tratado via parâmetro
    */
    _handleMudancaTitulo(evento) {
        evento.stopPropagation();
        this.titulo = evento.target.value;
    }

    /*
    stopPropagation - Cancela a propagação via módulos, classe do evento do componente
    */
    _handleMudancaNota(evento) {
        evento.stopPropagation();
        this.nota = evento.target.value;
    }

    /*
    'preventDefault' - Cancela o comportamento padrão de reset
    via evento 'onSubmit'
    stopPropagation - Cancela a propagação via módulos, classe do evento do componente
    */
    _criarNota(evento) {
        evento.preventDefault();
        evento.stopPropagation();
        this.props.criarNota(this.titulo, this.texto, this.categoria);
    }

    /*Necessário utilizar por se tratar de um componente */
    render() {
        return ( /*form - Criação componente formulario*/
            <form className="form-cadastro"
                onChange={this._handleMudancaCategoria.bind(this)}
                onSubmit={this._criarNota.bind(this)}
            >
                <select className="form-cadastro_input">
                    <option>Sem categoria</option>
                    {this.props.categorias.map(categoria => {
                        return <option>{categoria}</option>
                    })}
                </select>
                <input
                    /* 
                     onChange - Executação de função a partir de eventos
                     {} - Necessário utilizar por se tratar de uma chamada de 
                     função JavaScript
                     this.função.bind(this) - passa via parâmetro a chamada da função 
                     atribuida a classe de origem
                     */
                    type='text'
                    placeholder='Título'
                    className="form-cadastro_input"
                    onChange={this._handleMudancaTitulo.bind(this)}
                />
                <textarea
                    rows={15}
                    placeholder='Escreva sua nota...'
                    className="form-cadastro_input"
                    onChange={this._handleMudancaNota.bind(this)}
                />
                <button className="form-cadastro_input form_cadastro_submit"
                    Criar Nota
                />
            </form>
        )
    }
}

export default FormularioCadastro;

export default class ArrayNotas {
    constructor() {
        this.notas = []
    }


    /*Adiciona um novo objeto 'Nota' através dos parâmetros passados*/
    adicionarNotas(titulo, texto, categoria) {
        const novaNota = new Nota(titulo, texto, categoria)
        this.notas.push(novaNota)
    }

    /*Remove um item da lista de notas passando via parâmetro seu índice */
    deletarNota(indice) {
        this.notas.splice(indice, 1)
    }
}

/*
Classe 'Nota' compôe o formato do objeto que será adicionado ao array
'notas' através da função 'adicionarNotas()'
 */
class Nota {
    constructor(titulo, texto, categoria) {
        this.titulo = titulo
        this.texto = texto
        this.categoria = categoria
    }
}
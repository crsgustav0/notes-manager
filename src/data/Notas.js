export default class ArrayNotas {
    constructor() {
        this.notas = []
        this._inscritos = []
    }


    /*Adiciona um novo objeto 'Nota' através dos parâmetros passados*/
    adicionarNotas(titulo, texto, categoria) {
        const novaNota = new Nota(titulo, texto, categoria)
        this.notas.push(novaNota)
        this.notificar()
    }

    /*Remove um item da lista de notas passando via parâmetro seu índice */
    deletarNota(indice) {
        this.notas.splice(indice, 1)
    }

    /*Adiciona ao array o elemento passado via parâmetro*/
    inscrever(func) {
        this._inscritos.push(func)
    }

    /*Para cada objeto recebido via array, executa a função 
    passada via parâmetro
    */
    notificar() {
        this._inscritos.forEach(func => {
            func(this.notas)
        })
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
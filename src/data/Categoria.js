export default class Categorias {
    constructor() {
        this.categorias = []
        this._inscritos = []
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
            func(this.categorias)
        })
    }

    /*Adiciona ao array o elemento passado via parâmetro*/
    adicionarCategoria(novaCategoria) {
        console.log(this.categorias)
        this.categorias.push(novaCategoria)
    }
}
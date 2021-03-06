export default class Categorias {
    constructor() {
        this.categorias = []
        this._inscritos = []
    }

    /*Adiciona ao array o elemento passado via parâmetro*/
    inscrever(func) {
        this._inscritos.push(func)
    }

    desinscrever(func) {
        this._inscritos = this._inscritos.filter(f => f !== func)
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
        this.categorias.push(novaCategoria)
        this.notificar()
    }
}
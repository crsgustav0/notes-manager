export default class Categorias {
    constructor() {
        this.categorias = []
    }

    /*Adiciona ao array o elemento passado via parâmetro*/
    adicionarCategoria(novaCategoria) {
        console.log(this.categorias)
        this.categorias.push(novaCategoria)
    }
}
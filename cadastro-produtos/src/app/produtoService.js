const PRODUTOS = '_PRODUTOS';

export function ErroValidacao(errors) {
    this.errors = errors;
}
export default class ProdutoService {

    validar = (produto) => {
        const errors = []

        if(!produto.nome){
            errors.push('O campo Nome é obrigatório.')
        }

        if (!produto.cod) {
            errors.push('O campo Cod é obrigatório.')
        }

        if (!produto.preco || produto.preco <= 0) {
            errors.push('O campo Preço dever ser preenchido com um valor válido e maior que 0.')
        }

        if(!produto.fornecedor){
            errors.push('O campo Fornedor é obrigatório.')
        }

        if(errors.length > 0){
            throw new ErroValidacao(errors)
        }
    }

    salvar = (produto) => {
        this.validar(produto)

        let produtos = localStorage.getItem(PRODUTOS)

        if(!produtos){
            produtos = [ ]
        }else{
            produtos = JSON.parse(produtos)
        }

        produtos.push(produto);

        localStorage.setItem(PRODUTOS, JSON.stringify(produtos))
    }
}
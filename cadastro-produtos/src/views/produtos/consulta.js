import React from 'react'
import ProdutoService from '../../app/produtoService'
import {withRouter} from 'react-router-dom'
 class ConsultaProdutos extends React.Component{

    state = {
        produtos : []
    }

    constructor(){
        super()
        this.service = new ProdutoService();
    }

    componentDidMount(){
        const produtos = this.service.obterProdutos();
        this.setState({produtos})
    }

    preparaEditar = (cod) => {
        console.log('cod', cod)
        this.props.history.push(`/cadastro-produtos/${cod}`)
    }

    deletar = (cod) => {
      const produtos =  this.service.deletar(cod)
      this.setState({produtos})
    }

    render(){
        return(
            <div className='card'>
            <div className='card-header'>
                Consulta Produtos
            </div>
            <div className='card-body'>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Cod</th>
                            <th>Preço</th>
                            <th>Fornecedor</th>
                            <th>Opções</th>
                        </tr>
                    </thead>
                    <tbody>
                            { this.state.produtos.map((produto, index) => {
                                return(
                                    <tr key={index}>
                                        <th>{produto.nome}</th>
                                        <th>{produto.cod}</th>
                                        <th>{produto.preco}</th>
                                        <th>{produto.fornecedor}</th>
                                        <th>
                                            <button onClick={() => this.preparaEditar(produto.cod)} className="btn btn-primary">Editar</button>
                                            <button onClick={() => this.deletar(produto.cod)} className="btn btn-danger">Deletar</button>
                                        </th>
                                    </tr>
                                )
                            })

                            }
                    </tbody>
                </table> 
            </div>
        </div>
        )
    }
}

export default withRouter(ConsultaProdutos)
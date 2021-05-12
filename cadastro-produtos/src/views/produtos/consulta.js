import React from 'react'

export default class ConsultaProdutos extends React.Component{

    state = {
        produtos : []
    }
    render(){
        return(
            <div className='card'>
            <div className='card-header'>
                Consulta Produtos
            </div>
            <div className='card-body'>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Cod</th>
                            <th>Preço</th>
                            <th>Fornecedor</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                            { this.state.produtos.map(produto => {
                                return(
                                    <tr>
                                        <th>{produto.nome}</th>
                                        <th>{produto.cod}</th>
                                        <th>{produto.preco}</th>
                                        <th>{produto.fornecedor}</th>
                                        <th></th>
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
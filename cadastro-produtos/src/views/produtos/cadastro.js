import React from 'react'

import ProdutoService from '../../app/produtoService'

import {withRouter} from 'react-router-dom'

const estadoInicial = {
    nome: '',
    cod: '',
    descricao: '',
    preco: 0,
    fornecedor: '',
    sucesso: false,
    errors: [],
    atualizando : false
}

class CadastroProduto extends React.Component {

    state = estadoInicial;

    constructor(){
        super()
        this.service = new ProdutoService();
    }

    onChange = (e) =>{
        const valor = e.target.value
        const nomeDoCampo = e.target.name
        this.setState({[nomeDoCampo]: valor})
    }

    onSubmit = (e) =>{
        e.preventDefault();
        const produto = {
            nome: this.state.nome,
            cod: this.state.cod,
            descricao: this.state.descricao,
            preco: this.state.preco,
            fornecedor: this.state.fornecedor
        }
        try {
            this.service.salvar(produto)
            this.limpaCampo()
            this.setState({sucesso: true})
        } catch (erro) {
            const errors = erro.errors
            this.setState({errors : errors})
        }
        
    }

    limpaCampo = () => {
        this.setState(estadoInicial)
    }

    componentDidMount(){
       const cod = this.props.match.params.cod
       if(cod){
        const resultado = this.service.obterProdutos().filter(produto => produto.cod === cod)
        if (resultado.length === 1) {
            const produtoEncontrado = resultado[0]
            this.setState({ ...produtoEncontrado, atualizando: true })
        }
       }
    }

    render(){
        return(
            <div className='card'>
                <div className='card-header'>
                    {this.state.atualizando ? 'Atualização ' :'Cadastro '}
                     de Produto
                </div>
                <div className='card-body'>

                <form id="frmProduto" onSubmit={this.onSubmit}>
                { this.state.sucesso &&
    
                     <div class="alert alert-dismissible alert-success">
                        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                        <strong>Muito Bom!</strong> Cadastro realizado com sucesso!
                    </div>

                }

                { this.state.errors.length > 0 &&
                    
                    this.state.errors.map( msg => {
                        return (
                            <div class="alert alert-dismissible alert-danger">
                                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                                <strong>Error</strong> {msg}
                            </div>
                        )
                    })
                   
                }

                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='form-group'>
                                <label>Nome: </label>
                                <input type='text' 
                                       name='nome' 
                                       onChange={this.onChange}
                                       value={this.state.nome} 
                                       className='form-control'/>
                            </div>
                        </div>
                        
                        <div className='col-md-6'>
                            <div className='form-group'>
                                <label>Cod: </label>
                                <input type='text' 
                                       name='cod' 
                                       disabled={this.state.atualizando}
                                       value={this.state.cod} 
                                       onChange={this.onChange}
                                       className='form-control'/>
                            </div>
                        </div>

                        <div className='col-md-6'>

                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='form-group'>
                                <label>Descrição</label>
                                <textarea name='descricao' 
                                          onChange={this.onChange}
                                          value={this.state.descricao} 
                                          className='form-control'/>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                    <div className='col-md-6'>
                            <div className='form-group'>
                                <label>Preço: </label>
                                <input type='text' 
                                       name='preco'
                                       onChange={this.onChange}
                                       value={this.state.preco} 
                                       className='form-control'/>
                            </div>
                    </div>

                    <div className='col-md-6'>
                            <div className='form-group'>
                                <label>Fornecedor: </label>
                                <input type='text' 
                                       name='fornecedor'
                                       onChange={this.onChange}
                                       value={this.state.fornecedor} 
                                       className='form-control'/>
                            </div>
                    </div>
                    </div>

                    <div className='row'>
                        <div className='col-md-1'>
                            <button type="submit" className='btn btn-success'> 
                            {this.state.atualizando ? 'Atualizar ' : 'Salvar'}
                            </button>
                        </div>
                        <div className='col-md-1'>
                            <button onClick={this.limpaCampo} className='btn btn-primary'> Limpar </button>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(CadastroProduto);
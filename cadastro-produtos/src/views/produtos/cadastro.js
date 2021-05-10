import React from 'react'

class CadastroProduto extends React.Component {

    state = {
        nome: '',
        cod: '',
        descricao: '',
        preco: 0,
        fornecedor: ''
    }

    onChange = (e) =>{
        const valor = e.target.value
        const nomeDoCampo = e.target.name
        this.setState({[nomeDoCampo]: valor})
    }

    onSubmit = (e) =>{
        console.log(this.state)
    }

    limpaCampo = () => {
        this.setState({
            nome: '',
            cod: '',
            descricao: '',
            preco: 0,
            fornecedor: '' 
        })
    }

    render(){
        return(
            <div className='card'>
                <div className='card-header'>
                    Cadastro de Produto
                </div>
                <div className='card-body'>
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
                            <button onClick={this.onSubmit} className='btn btn-success'> Salvar </button>
                        </div>
                        <div className='col-md-1'>
                            <button onClick={this.limpaCampo} className='btn btn-primary'> Limpar </button>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default CadastroProduto;
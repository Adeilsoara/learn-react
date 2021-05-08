import logo from './logo.svg';
import './App.css';
import React from 'react';

/* function ComponenteFuncional(){
  return(
    <h1>hello world</h1>
  )
} */

class App extends React.Component{
  state = {
    nome : ""
  }

  modificarNome = (e) => {
    this.setState({
      nome: e.target.value
    })
  }

  criarComboBox = () => {
    const opcoes = ["Fulano", "Cicrano"]
    const comboBoxOpcoes = opcoes.map(opcao => <option>{opcao}</option>)
    
    return (
      <select>
        {comboBoxOpcoes}
      </select>
    )
  }

  componentDidMount(){
    console.log('Executou o DidMount')
  }

  render(){
    return (
      <>
        <input type='text' value = {this.state.nome} onChange={this.modificarNome}></input>
        <h1>Hello {this.state.nome}</h1>
        {this.criarComboBox()}
      </>
    )
  }
}
export default App;


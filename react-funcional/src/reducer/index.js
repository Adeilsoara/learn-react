import React, {useState} from 'react'

import useStore from './somaReducer'

function ReducerHook() {
  //programação funcional com hooks no React
  const [numero, setNumero] = useState()
  const [segundoNumero, setSegundoNumero] = useState()
  const [store, dispatch] = useStore()

  const somar =() =>{
    const numero1 = parseInt(numero)
    const numero2 = parseInt(segundoNumero)
    
    dispatch({
        type: 'SOMA',
        payload: numero1 + numero2
    })
  }

 
  //Outra forma de usar o hooks
 /*  const [state, setState] = useState({
    numero: 0,
    segundoNumero: 0,
    resultado: 0
  }) */

  return (
    <div>
      Numero 1:
      <input type="number" value={numero} onChange={e => setNumero(e.target.value)}/> <br/>
      Numero 2:
      <input type="number" value={segundoNumero} onChange={e => setSegundoNumero(e.target.value)}/> <br/>
      Resultado:
      <input type="number" value={store.resultado} readOnly/> <br/>
      <button type="button" onClick={somar}>Somar</button>
    </div>
  );
}

export default ReducerHook;

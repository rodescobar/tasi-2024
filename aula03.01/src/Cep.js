import { useState } from 'react'

const Cep = ({ nomeCampo, numCep, retornaValor}) => {

  const buscarCep = async () => {
      /*
      Exemplo Aula02 Axios
      */
      retornaValor("111")
   
  }

  return(
    <div>
      <input type="button"
        onClick={ () => {buscarCep()}} 
        />
    </div>
  )
}


export default Cep
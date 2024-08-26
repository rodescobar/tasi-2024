import { useState } from 'react'

import Cep from './Cep'

export default function App() {

  var [ origem, setOrigem ] = useState("")
	var [ destino, setDestino ] = useState("")
	
	const recebeValor = (e) => {

		if (e.target.name == "origem")
			setOrigem( e.target.value )

		if (e.target.name == "destino")
			setDestino( e.target.value )
	}

	const recebeLogradouro = (logradouro, bairro) => {
		console.log(bairro)
	}
	
	return(
		<div>
			<input type="text"
				tooltip="Cep origem"
				name="origem"
				onChange={ (e) => { recebeValor(e) } }
			/>

			<Cep nomeCampo="Origem"
				numCep={ origem } 
				retornaValor={ recebeLogradouro }
				/>

			<input type="text"
				tooltip="Cep destino"
				name="destino"
				onChange={ (e) => { recebeValor(e) } }
				/>				 
			<Cep nomeCampo="Destino"
				numCep={ destino }
				retornaValor={ recebeLogradouro }
				/>

		</div>
	)
}
import { useState } from 'react'
import Botao from './components/Botao'

const App = () => {
	var [ funcao, setFuncao ] = useState("")
	var [ result, setResult ] = useState(0)

	const recebeValor = (valor) => {

		if (isNaN(valor) && valor == "=")
			setResult(eval(funcao))	
		else {
			setFuncao( funcao + valor )
		}
	}

	return(
		<div>
			<div style={{ "width": "210px", "border": "1px solid black", "textAlign": "right"}}>
				<p>{ funcao }</p>
				<h3>{ result }</h3>
			</div>
			<div style={{ "width": "210px", "border": "1px solid black", "textAlign": "right"}}>
				<Botao valor="7" retorno={ recebeValor } />
				<Botao valor="8" retorno={ recebeValor } />
				<Botao valor="9" retorno={ recebeValor } />
				<Botao valor="+" retorno={ recebeValor } />
				<Botao valor="4" retorno={ recebeValor } />
				<Botao valor="5" retorno={ recebeValor } />
				<Botao valor="6" retorno={ recebeValor } />
				<Botao valor="-" retorno={ recebeValor } />
				<Botao valor="1" retorno={ recebeValor } />
				<Botao valor="2" retorno={ recebeValor } />
				<Botao valor="3" retorno={ recebeValor } />
				<Botao valor="*" retorno={ recebeValor } />
				<Botao valor="0" retorno={ recebeValor } />
				<Botao valor="00" retorno={ recebeValor } />
				<Botao valor="/" retorno={ recebeValor } />
				<Botao valor="=" retorno={ recebeValor } />
			</div>
		</div>
	)
}

export default App
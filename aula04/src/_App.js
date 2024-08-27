import { useState } from 'react'
import Botao from './components/Botao'

const App = () => {
	var [ funcao, setFuncao ] = useState("")
	var [ result, setResult ] = useState(0)

	const recebeValor = (valor) => {

		if (isNaN(valor) && valor == "=")
			setResult(eval(funcao))	
		else if (isNaN(valor) && valor == "C") {
			setResult( 0 )	
			setFuncao( "" )
		}
		else {
			setFuncao( funcao + valor )
		}
	}

	return(
		<div>
			<div style={{ 
					"width": "210px", 
					"border": "1px solid black", 
					"textAlign": "right",
					"color": "#fff",
					"background": "#000"
				}}>
				<p>{ funcao }</p>
				<h3>{ result }</h3>
			</div>
			<div style={{ 
					"width": "210px", 
					"border": "1px solid black", 
					"textAlign": "right",
					"background": "#000"
					}}>
				<Botao valor="7" retorno={ recebeValor } cor="#fff" />
				<Botao valor="8" retorno={ recebeValor } cor="#fff" />
				<Botao valor="9" retorno={ recebeValor } cor="#fff" />
				<Botao valor="+" retorno={ recebeValor } cor="orange" />
				<Botao valor="4" retorno={ recebeValor } cor="#fff" />
				<Botao valor="5" retorno={ recebeValor } cor="#fff" />
				<Botao valor="6" retorno={ recebeValor } cor="#fff" />
				<Botao valor="-" retorno={ recebeValor } cor="orange" />
				<Botao valor="1" retorno={ recebeValor } cor="#fff" />
				<Botao valor="2" retorno={ recebeValor } cor="#fff" />
				<Botao valor="3" retorno={ recebeValor } cor="#fff" />
				<Botao valor="*" retorno={ recebeValor } cor="orange" />
				<Botao valor="0" retorno={ recebeValor } cor="#fff" />
				<Botao valor="C" retorno={ recebeValor } cor="orange" />
				<Botao valor="/" retorno={ recebeValor } cor="orange" />
				<Botao valor="=" retorno={ recebeValor } cor="orange" />
			</div>
		</div>
	)
}

export default App
import { useState  } from "react"
import Botao from "./components/Botao"

const estilos = {
    Laranja: {
        "background": "orange",
        "width": "50px",
        "height": "50px",
        "borderRadius": "50px",
        "margin": "1px",
        "border": "none"
    },
    Branco: {
        "background": "white",
        "width": "50px",
        "height": "50px",
        "borderRadius": "50px",
        "margin": "1px",
        "border": "none"
    }
}



const App = () => {
    var [ expressao, setExpressao ] = useState("")
    var [ resultado, setResultado ] = useState("")

    const Receba = ( valRecebido ) => {

        if (valRecebido == "=") {
            let total = eval( expressao )
            setResultado( total )
        }
        else if (valRecebido == "C") {
            setResultado("")
            setExpressao("")
        }
        else 
            setExpressao( expressao + valRecebido )
    }

    return(
        <div>
            <div style={ 
                {
                    "background": "#000",
                    "color": "#fff",
                    "width": "210px",
                    "textAlign": "right"
                } 
            }>
                <p>{ expressao }</p>
                <h3>{ resultado }</h3>
            </div>
            <div style={ 
                {
                    "background": "#000",
                    "color": "#fff",
                    "width": "210px"
                } 
            }>
                <Botao valor="7" retorno={ Receba } estilo={ estilos.Branco } />
                <Botao valor="8" retorno={ Receba } estilo={ estilos.Branco } />
                <Botao valor="9" retorno={ Receba } estilo={ estilos.Branco } />
                <Botao valor="+" retorno={ Receba } estilo={ estilos.Laranja } />
                <Botao valor="4" retorno={ Receba } estilo={ estilos.Branco } />
                <Botao valor="5" retorno={ Receba } estilo={ estilos.Branco } />
                <Botao valor="6" retorno={ Receba } estilo={ estilos.Branco } />
                <Botao valor="-" retorno={ Receba } estilo={ estilos.Laranja } />
                <Botao valor="1" retorno={ Receba } estilo={ estilos.Branco } />
                <Botao valor="2" retorno={ Receba } estilo={ estilos.Branco } />
                <Botao valor="3" retorno={ Receba } estilo={ estilos.Branco } />
                <Botao valor="*" retorno={ Receba } estilo={ estilos.Laranja } />
                <Botao valor="0" retorno={ Receba } estilo={ estilos.Branco } />
                <Botao valor="C" retorno={ Receba } estilo={ estilos.Laranja } />
                <Botao valor="/" retorno={ Receba } estilo={ estilos.Laranja } />
                <Botao valor="=" retorno={ Receba } estilo={ estilos.Laranja } />
            </div>
        </div>
    )
}

export default App
import { useState  } from "react"
import axios from 'axios'


const App = () => {

    var [ lista, setLista ] = useState([])

    const buscarDados = async () => {
        var url = "https://rickandmortyapi.com/api/character"
        await axios.get(url)
             .then( retorno => {
                //percorrer
                var dados = retorno.data.results
                setLista( dados )
             })
    }

    const novo_html = lista.map( (item,key) => {
        return(
            <h2 key={ key }>Personagem:
                { item.name }
                <br/>
                <img src={ item.image }
                    style="width: 300px; height: 300px" />
            </h2>
        )
    })

    return(
        <div>
            <button onClick={ () => buscarDados() }>
                BUSCAR
            </button>
            { novo_html }
        </div>
    )
}

export default App
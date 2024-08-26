import { useState } from 'react'

const Botao = ({ valor, retorno }) => {

    const Clique = (target) => {
        retorno(target.value)
    }

    return(
        <input type="button"
             style={{ "width": "50px", "height": "50px" }}
             onClick={ (e) => { Clique(e.target) } }
             value={ valor }
        />
    )
}

export default Botao
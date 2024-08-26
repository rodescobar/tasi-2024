import { useState } from 'react'

const Botao = ({ valor, retorno, cor }) => {

    const Clique = (target) => {
        retorno(target.value)
    }

    return(
        <input type="button"
             style={{ 
                    "width": "50px", 
                    "height": "50px", 
                    "background": cor,
                    "border": "1px solid black",
                    "borderRadius": "50px",
                    "margin": "1px"
                }}
             onClick={ (e) => { Clique(e.target) } }
             value={ valor }
        />
    )
}

export default Botao
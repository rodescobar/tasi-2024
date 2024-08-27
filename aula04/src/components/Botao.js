const Botao = ({ valor, retorno, estilo }) => {
    const Clique = (e) => {
        //console.log(e.target.value)
        retorno(e.target.value)
    }

    return(
        <input type="button"
               value={ valor }
               onClick={ (e) => { Clique(e) } }
               style={ estilo }
        />
    )
}

export default Botao
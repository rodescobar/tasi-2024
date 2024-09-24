import { useState } from 'react'

//Tela Login
const Login = ({ callback }) => {
    const [dados, setDados] = 
        useState({ usuario: "", senha: "" });

    const handleSubmit = () => {
        callback( dados )
    };

    return (
        <div>
            <h2>Login</h2>
                <input
                    type="text"
                    placeholder="Username"
                    value={dados.usuario}
                    onChange={(e) => 
                        setDados(
                            { 
                                ...dados, 
                                usuario: e.target.value 
                            }
                        )}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={dados.senha}
                    onChange={(e) => setDados(
                        { ...dados, 
                            senha: e.target.value 
                        }
                )}
                />
                <button type="button" onClick={ () => handleSubmit() }>Login</button>
        </div>
    );
}

//Tela Dashboard
const Dashboard = () => {
    return (
        <h2>Seja bem vindo ao Dashboard</h2>
    )
}

const App = () => {

    const EfetuaLogin = ( dados ) => {
        if (dados.usuario == "teste" && dados.senha == "123")
        {
            localStorage.setItem("MEU_SITE", dados.usuario )
        }
        else 
        {
            console.log("USUARIO E OU SENHA INVALIDOS")
        }
    }

    const Deslogar = () => {
        localStorage.removeItem("MEU_SITE")
    }
    //Adiciono item ao LocalStorage
    //localStorage.setItem("MEU_TOKEN", [1,2,3,5,6,4,8])

    //Leio o item do localStorage
    var retorno = localStorage.getItem("MEU_TOKEN")
    //console.log(retorno)

    return ( 
        <div>
            <Login callback={ EfetuaLogin } /> 
            <button onClick={ () => Deslogar() }>Logout</button>
        </div>
        )
}


export default  App
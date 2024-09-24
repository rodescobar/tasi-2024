import {
    createBrowserRouter,
    RouterProvider,
    Link,
    useParams
} from 'react-router-dom'

const Home = () => {
    return(
        <div>
            <h2>Home</h2>
            <Link to="produtos/1">Produtos</Link>
            <br />
            <Link to="produtos/2">Produtos</Link>
            <br />
            <Link to="produtos/3">Produtos</Link>
            <br />
            <Link to="produtos/4">Produtos</Link>
            <br />
        </div>
    )
}

const Produtos = () => {
    //path: "/produtos/:id/:nome",
    const { id } = useParams();

    return (
        <div>
            <h2>Produtos <span>{ id }</span></h2>
            <Link to="/">Home</Link>
        </div>
    )
}

const rotas = new createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/produtos/:id",
        element: <Produtos />
    },
    {
        path: "/produtos",
        element: <Produtos />
    }    
])

const App = () => {
    return (
        <RouterProvider 
            router = { rotas }
        />
    )
}
export default App


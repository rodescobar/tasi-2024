import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";


function App() {
    const [auth, setAuth] = useState({})

    useEffect(() => {
        var autenticado = false
        var user = {}
        if (localStorage.getItem("AulaITE") === "true") {
            autenticado = true
            user = { name: "Escobar" }
        }
        setAuth({
            autenticado, user
        })
    }, [])

    const login = (credentials) => {
        if (credentials.username === "cliente" && credentials.password === "1234") {
            setAuth({ ...auth, isAuthenticated: true });
            localStorage.setItem("AulaITE", "true");
        } else {
            alert("Usuário e/ou senha incorretos");
        }
    };

    const logout = () => {
        setAuth({ ...auth, isAuthenticated: false });
        localStorage.removeItem("isAuthenticated");
    };

    return (
        <Router>
            <nav>
                <Link to="/login">Login</Link>
                {auth.isAuthenticated && <Link to="/dashboard">Dashboard</Link>}
            </nav>

            <Routes>
                <Route path="/login" element={<Login login={login} />} />
                <Route
                    path="/dashboard"
                    element={
                        auth.isAuthenticated ? (
                            <Dashboard user={auth.user} logout={logout} />
                        ) : (
                            <Navigate to="/login" />
                        )
                    }
                />
            </Routes>
        </Router>
    );
}

function Login({ login }) {
    const [credentials, setCredentials] = useState({ username: "", password: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        login(credentials);
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={credentials.username}
                    onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={credentials.password}
                    onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

function Dashboard({ user, logout }) {
    return (
        <div>
            <h2>Dashboard</h2>
            <pre style={{ backgroundColor: "#f0f0f0", padding: "20px", borderRadius: "5px" }}>
                {JSON.stringify(user, null, 2)}
            </pre>
            <button onClick={logout}>Logout</button>
        </div>
    );
}

export default App;
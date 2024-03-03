import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Login.module.css"
import { useFetch } from "../../hooks/useFetch";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const { PostRequest } = useFetch();
    const { user, login, logout } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();

        var body = {
            email : name,
            password : password
        }

        var response = await PostRequest(body, "authentication/login")
        login(response.data)
    }

    return (
        <div className={styles.containerA}>
            <h1>Login</h1>
            <p>Por favor, insira suas credenciais abaixo para acessar sua conta.</p>
            <div className={styles.containerB}>
                <form onSubmit={handleSubmit}>
                    <label>
                        <span>Nome</span>
                        <input className={styles.box} type="text" name="name" onChange={(e) => setName(e.target.value)} />
                        <span>Senha</span>
                        <input className={styles.box} type="password" name="senha" onChange={(e) => setPassword(e.target.value)} />
                    </label>
                    <button className={styles.btn}>Login</button>
                    <p>Não possui cadastro? <NavLink to="/">cadastre-se</NavLink></p>
                </form>
            </div>
        </div>
    )
}

export default Login
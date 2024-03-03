import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Login.module.css"
import { useFetch } from "../../hooks/useFetch";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const { PostRequest, error, loading } = useFetch();
    const { login } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();

        var body = {
            email : name,
            password : password
        }

        var response = await PostRequest(body, "authentication/login")

        if(!error)
            login(response.data)
    }

    console.log(error)

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
                    {error ?? <h4>teste</h4>}
                    <button  className={styles.btn}>Login</button>
                    <p>Não possui cadastro? <NavLink to="/">cadastre-se</NavLink></p>
                </form>
            </div>
        </div>
    )
}

export default Login
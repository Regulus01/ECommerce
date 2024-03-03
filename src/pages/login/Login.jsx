import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Login.module.css"
import { useFetch } from "../../hooks/useFetch";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [response, setResponse] = useState("");
    const { PostRequest, error, loading } = useFetch();
    const { login } = useAuth();
    const [loadingAuth, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)

        var body = {
            email: name,
            password: password
        }

        setResponse(await PostRequest(body, "authentication/login"))

        setLoading(false)
    }

    useEffect(() => {
        if (!error) {
            login(response.data)
        }

    }, [response]);


    return (
        <div className={styles.containerA}>
            <h1>Login</h1>
            <p>Por favor, insira suas credenciais abaixo para acessar sua conta.</p>
            <div className={styles.containerB}>
                <form onSubmit={handleSubmit}>
                    <label>
                        <span>Nome</span>
                        <input className={styles.box} type="text" name="name" required onChange={(e) => setName(e.target.value)} />
                        <span>Senha</span>
                        <input className={styles.box} type="password" name="senha" required onChange={(e) => setPassword(e.target.value)} />
                    </label>
                    {error && <div className={styles.error}> <h4 className="error"> {error} </h4> </div>}
                    <div className={styles.btnDiv}>
                        <button disabled={loadingAuth} className={styles.btn}>Login</button>
                    </div>
                    <p>Não possui cadastro? <NavLink to="/">cadastre-se</NavLink></p>
                </form>
            </div>
        </div>
    )
}

export default Login
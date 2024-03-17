import { useEffect, useState } from "react";
import styles from "./Cadastro.module.css"
import { useFetch } from "../../hooks/useFetch";
import { useNavigate } from 'react-router-dom';


const Cadastro = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [cpf, setCpf] = useState("")
    const [telefone, setTelefone] = useState("")
    const [password, setPassword] = useState("")
    const [response, setResponse] = useState("");
    const { PostRequest, error, loading } = useFetch();
    const [loadingAuth, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)

        var body = {
            nome: name,
            cpf: cpf,
            telefone: telefone,
            email: email,
            password: password
        }

        setResponse(await PostRequest(body, "authentication/cadastrar"))
        setLoading(false)
    }

    useEffect(() => {
        console.log(response)
        if (!error && response.success === true) {
            navigate('/login')
        }

    }, [response, error]);

    return (
        <div className={styles.containerA}>
            <h1>Cadastro</h1>
            <p>Insira seus dados para realizar seu cadastro.</p>
            <div className={styles.containerB}>
                <form onSubmit={handleSubmit}>
                    <label>
                        <span>Nome</span>
                        <input className={styles.box} type="text" name="name" required onChange={(e) => setName(e.target.value)} />
                        <span>Email</span>
                        <input className={styles.box} type="email" name="email" required onChange={(e) => setEmail(e.target.value)} />
                        <span>Cpf</span>
                        <input className={styles.box} type="number" name="cpf" required onChange={(e) => setCpf(e.target.value)} />
                        <span>Telefone</span>
                        <input className={styles.box} type="number" name="telefone" required onChange={(e) => setTelefone(e.target.value)} />
                        <span>Senha</span>
                        <input className={styles.box} type="password" name="senha" required onChange={(e) => setPassword(e.target.value)} />
                    </label>
                    {error && <div className={styles.error}> <h4 className="error"> {error} </h4> </div>}
                    <div className={styles.btnDiv}>
                        <button disabled={loadingAuth} className={styles.btn}>Cadastrar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Cadastro
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'
import { FaSearch } from 'react-icons/fa';
import logo from '../assets/logo.png'
import carrinho from '../assets/carrinho.png'
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const { user, logout } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await logout()
    }

    return (
        <div>
            <nav className={styles.navbar}>
                <NavLink className={styles.NavLink} to="/">
                    <img className={styles.logo} src={logo} alt="Logo" />
                </NavLink>
                <div className={styles.searchContainer}>
                    <div>
                        <input placeholder="Pesquise no site" className={styles.input} type="text" name="name" />
                        <div className={styles.search}>
                            <FaSearch />
                        </div>
                    </div>
                </div>
                <ul className={styles.links_list}>
                    <li>
                        {user && <NavLink className={styles.NavLink} to="/"> Olá josé </NavLink>}
                        {user && <NavLink className={styles.NavLink} to="/"> <img className={styles.carrinho} src={carrinho} alt="carrinho" /> </NavLink>}
                    </li>
                    <li>
                        {!user && <NavLink className={styles.NavLink} to="/login"> Olá, Faça seu login </NavLink>}
                        {user && <NavLink className={styles.NavLink} onClick={handleSubmit}>Logout</NavLink>}
                    </li>

                </ul>
            </nav>
            <nav className={styles.navbarBaixa}>
                <button className={styles.Button}>
                    <h4>Departamentos</h4>
                </button>
                <ul className={styles.links_list}>
                    <li>
                        <NavLink className={styles.NavLink} to="/"> Mercado </NavLink>
                    </li>
                    <li>
                        <NavLink className={styles.NavLink} to="/"> Eletrônicos </NavLink>
                    </li>
                    <li>
                        <NavLink className={styles.NavLink} to="/"> Moveis </NavLink>
                    </li>
                    <li>
                        <NavLink className={styles.NavLink} to="/"> Vestuário </NavLink>
                    </li>
                </ul>
                <div>
                    <li>
                        <NavLink className={styles.NavLink} to="/about"> Sobre </NavLink>
                    </li>
                </div>
            </nav>

        </div>

    )
}

export default Navbar
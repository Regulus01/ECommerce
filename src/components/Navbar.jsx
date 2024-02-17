import { NavLink } from 'react-router-dom'
import { CiShoppingBasket } from "react-icons/ci";
import styles from './Navbar.module.css'
import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div>
            <nav className={styles.navbar}>
                <NavLink className={styles.NavLink} to="/">
                    FullBox
                </NavLink>
                <div className={styles.searchContainer}>
                    <input placeholder="Pesquise no site" className={styles.input} type="text" name="name" />
                    <FaSearch className={styles.search} />
                </div>
                <ul className={styles.links_list}>
                    <li>
                        <NavLink className={styles.NavLink} to="/"> Olá, Faça seu login </NavLink>
                    </li>
                    <li>
                        <NavLink className={styles.NavLink} to="/"> <CiShoppingBasket className={styles.basket} /> </NavLink>
                    </li>
                </ul>
            </nav>
            <nav className={styles.navbarBaixa}>
                <button className={styles.departamentsButton}>
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
                        <NavLink className={styles.NavLink} to="/"> Mais visualizados </NavLink>
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
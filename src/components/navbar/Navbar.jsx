import React from "react";
import {NavLink} from "react-router-dom";
import BtnDarkMode from "../btnDarkMode/BtnDarkMode";
import HomeIcon from '@mui/icons-material/Home';
import styles from "./Navbar.module.scss"

const Navbar = () => {

    const activeLink = styles.navListLinkActive + " " + styles.navListLink;
    const normalLink = styles.navListLink

    return <nav className={styles.nav}>

        <div className="container">
            <div className={styles.navRow}>
                <NavLink to="/" className={styles.logo}>Портфолио</NavLink>
                <BtnDarkMode/>

                <ul className={styles.navList}>
                    <li className={styles.navListItem}><NavLink to="/"
                                                                className={({isActive}) => isActive ? activeLink : normalLink}><HomeIcon/></NavLink>
                    </li>
                    <li className={styles.navListItem}><NavLink to="./projects"
                                                                className={({isActive}) => isActive ? activeLink : normalLink}>Проекты</NavLink>
                    </li>
                    <li className={styles.navListItem}><NavLink to="./contacts"
                                                                className={({isActive}) => isActive ? activeLink : normalLink}>Контакты</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
}

export default Navbar;
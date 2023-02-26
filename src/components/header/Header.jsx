import React from "react";
import {Link} from "react-router-dom";
import styles from "./Heade.module.scss"

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.headerWrapper}>
                <h1 className={styles.headerTitle}>
                    <div className={styles.headerTitleGreeting}>Привет, меня зовут <span>Екатерина</span></div>
                    <div className={styles.headerTitleAbout}>я - frontend разрабочик</div>
                </h1>
                <Link to="#" className={styles.headerButton}>Скачать резюме</Link>
            </div>
        </header>
    )
}

export default Header;
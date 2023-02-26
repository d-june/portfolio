import React from "react";
import styles from "./Contacts.module.scss"

const Contacts = () => {
    return (
        <section className={styles.contactsContainer}>
            <h1 className={styles.contactsTitle}>Контакты</h1>

            <ul className={styles.contactsList}>
                <li className={styles.contactsItem}>
                    <h2 className={styles.contactsSubtitle}>Местоположение</h2>
                    <p>Санкт-Петербург, Россия</p>
                </li>
                <li className={styles.contactsItem}>
                    <h2 className={styles.contactsSubtitle}>Telegram / WhatsApp</h2>
                    <p><a href="tel:+79119400877">8-911-940-08-77</a></p>
                </li>
                <li className={styles.contactsItem}>
                    <h2 className={styles.contactsSubtitle}>Email</h2>
                    <p><a href="mailto:katrin.dudina@mail.ru">katrin.dudina@mail.ru</a></p>
                </li>
            </ul>
        </section>
    )
}

export default Contacts
import React from "react";
import {Link} from "react-router-dom";
import styles from "./Footer.module.scss"

import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerWrapper}>
                    <div className={styles.contacts}>
                        <div className={styles.email}><Link to="mailto:katrin.dudina@mail.ru"
                                                            target='_blank'><MailOutlineIcon
                            className={styles.icon}/> katrin.dudina@mail.ru</Link></div>
                        <div className={styles.phone}><Link to="tel:+79119400877" target='_blank'><PhoneIcon
                            className={styles.icon}/> 8-911-940-08-77</Link></div>
                    </div>
                    <ul className={styles.social}>
                        <li className={styles.socialItem}><Link to="https://wa.me/79119400877"
                                                                target='_blank'><WhatsAppIcon className={styles.icon}
                                                                                              fontSize="large"/></Link>
                        </li>
                        <li className={styles.socialItem}><Link to="https://t.me/catherine_dudina"
                                                                target='_blank'><TelegramIcon className={styles.icon}
                                                                                              fontSize="large"/></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
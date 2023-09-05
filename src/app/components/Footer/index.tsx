import styles from "./Footer.module.scss";

import { motion } from "framer-motion";

import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";

const footerAnimation = {
  hidden: {
    y: 200,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7 },
  },
};

const Footer = () => {
  return (
    <motion.footer
      className={styles.footer}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.5, once: true }}
    >
      <motion.div className={styles.footerContainer} variants={footerAnimation}>
        <div className={styles.footerAbout}>
          <div className={styles.footerAboutItem}>
            <p>Дудина Екатерина Михайловна</p>
            <p>Санкт-Петербург, Россия</p>
          </div>
          <div className={styles.footerAboutItem}>
            <div className={styles.footerAboutContacts}>
              <a href="mailto:katrin.dudina@mail.ru" target="_blank">
                <MailOutlineIcon className={styles.icon} />{" "}
                katrin.dudina@mail.ru
              </a>
              <a href="tel:+79119400877" target="_blank">
                <PhoneIcon className={styles.icon} /> 8-911-940-08-77
              </a>
            </div>
          </div>
          <div className={styles.footerAboutItem}>
            <ul className={styles.social}>
              <li className={styles.socialItem}>
                <a href="https://wa.me/79119400877" target="_blank">
                  <WhatsAppIcon className={styles.icon} fontSize="large" />
                </a>
              </li>
              <li className={styles.socialItem}>
                <a href="https://t.me/catherine_dudina" target="_blank">
                  <TelegramIcon className={styles.icon} fontSize="large" />
                </a>
              </li>
              <li className={styles.socialItem}>
                <a href="https://github.com/d-june/" target="_blank">
                  <GitHubIcon className={styles.icon} fontSize="large" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;

import { motion } from "framer-motion";

import styles from "./Header.module.scss";
import PhoneIcon from "@mui/icons-material/Phone";

const headerAnimation = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7 },
  },
};

const Header = () => {
  return (
    <motion.header
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={styles.header}
    >
      <motion.div className={styles.headerContainer} variants={headerAnimation}>
        <nav className={styles.menu}>
          <ul>
            <li>
              <a href="#projects">Проекты</a>
            </li>
            <li>
              <a href="#skills">Навыки</a>
            </li>
          </ul>
        </nav>
        <a href="tel:+79119400877" target="_blank">
          <PhoneIcon className={styles.icon} /> 8-911-940-08-77
        </a>
      </motion.div>
    </motion.header>
  );
};

export default Header;

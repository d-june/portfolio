import { motion } from "framer-motion";

import Image from "next/image";

import styles from "./Hero.module.scss";

const heroAnimation = {
  hidden: {
    x: -200,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2, duration: 0.7 },
  }),
};

const Hero = () => {
  return (
    <motion.section
      className={styles.hero}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.5, once: true }}
    >
      <motion.div className={styles.image} custom={4} variants={heroAnimation}>
        <Image
          src="/sea.jpg"
          alt="sea image"
          width={700}
          height={850}
          priority
        />
      </motion.div>

      <div className={styles.content}>
        <motion.div
          className={styles.contentContainer}
          custom={6}
          variants={heroAnimation}
        >
          <motion.h2
            className={styles.title}
            custom={6}
            variants={heroAnimation}
          >
            Привет. Меня зовут Екатерина.
          </motion.h2>
          <motion.h3
            className={styles.subtitle}
            custom={7}
            variants={heroAnimation}
          >
            Я - frontend-разработчик
          </motion.h3>
          <motion.a
            href="/resume.pdf"
            download
            className={styles.resumeLink}
            custom={8}
            variants={heroAnimation}
          >
            Скачать резюме
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;

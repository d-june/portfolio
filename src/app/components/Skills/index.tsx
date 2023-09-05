import { motion } from "framer-motion";

import styles from "./Skills.module.scss";

const titleAnimation = {
  hidden: {
    y: -50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6 },
  },
};

const skillsAnimation = {
  hidden: {
    x: -50,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2, duration: 0.7 },
  }),
};

const Skills = () => {
  const skills = [
    "HTML5",
    "CSS3, адаптивная верстка",
    "Основы JavaScript",
    "Основы Git и GitHub",
    "MaterialUI",
    "Ant Design",
    "Ract",
    "Redux (toolkit, thunk)",
    "Typesctipt",
  ];
  return (
    <motion.section
      className={styles.skillsContainer}
      id="skills"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.5 }}
    >
      <motion.h2 className={styles.skillsTitle} variants={titleAnimation}>
        Навыки
      </motion.h2>
      <motion.ul
        className={styles.skillsList}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5 }}
      >
        {skills.map((skill, index) => {
          return (
            <motion.li
              key={index}
              className={styles.skillsItem}
              custom={index + 1}
              variants={skillsAnimation}
            >
              {skill}
            </motion.li>
          );
        })}
      </motion.ul>
    </motion.section>
  );
};

export default Skills;

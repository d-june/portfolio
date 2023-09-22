import { RootState } from "@/redux/store";
import Project from "./Project";
import styles from "./Projects.module.scss";
import { useSelector } from "react-redux";

import { motion } from "framer-motion";

const titleAnimation = {
  hidden: {
    y: -50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7 },
  },
};

const reactProjectsAnimation = {
  hidden: {
    x: 800,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: 0.4, duration: 0.8 },
  }),
};

const layoutProjectsAnimation = {
  hidden: {
    x: -1000,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: 0.4, duration: 0.7 },
  }),
};

const Projects = () => {
  const { reactProjects } = useSelector((state: RootState) => state.projects);
  const { layoutProjects } = useSelector((state: RootState) => state.projects);
  return (
    <section className={styles.projectsContainer} id="projects">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5, once: true }}
      >
        <motion.h2 className={styles.title} variants={titleAnimation}>
          Проекты на React
        </motion.h2>
      </motion.div>
      <motion.ul
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5, once: true }}
        className={
          reactProjects.length > 2
            ? styles.projectsListSmall
            : styles.projectsListBig
        }
      >
        {reactProjects.map((project) => {
          return (
            <motion.li
              key={project.id}
              className={styles.skillsItem}
              variants={reactProjectsAnimation}
            >
              <Project {...project} />
            </motion.li>
          );
        })}
      </motion.ul>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 className={styles.title} variants={titleAnimation}>
          Проекты HTML, CSS, JS
        </motion.h2>
      </motion.div>
      <motion.ul
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={
          layoutProjects.length > 2
            ? styles.projectsListSmall
            : styles.projectsListBig
        }
      >
        {layoutProjects.map((project) => {
          return (
            <motion.li
              key={project.id}
              className={styles.skillsItem}
              variants={layoutProjectsAnimation}
            >
              <Project {...project} />
            </motion.li>
          );
        })}
      </motion.ul>
    </section>
  );
};

export default Projects;

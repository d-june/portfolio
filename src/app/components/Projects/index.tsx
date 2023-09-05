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

const projectsAnimation = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2, duration: 0.7 },
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
              custom={project.id + 1}
              variants={projectsAnimation}
            >
              <Project {...project} />
            </motion.li>
          );
        })}
      </motion.ul>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5, once: true }}
      >
        <motion.h2 className={styles.title} variants={titleAnimation}>
          Проекты HTML, CSS, JS
        </motion.h2>
      </motion.div>
      <motion.ul
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5, once: true }}
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
              custom={project.id + 1}
              variants={projectsAnimation}
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

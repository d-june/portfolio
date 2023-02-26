import React from "react";
import styles from "./Skills.module.scss"

const Skills = () => {
    return (
        <section className={styles.skillsContainer}>
                <h2 className={styles.skillsTitle}>Frontend</h2>
                <p className={styles.skillsText}>JavaScript, TypeScript, ReactJS, Angular, Redux, HTML, CSS, NPM, BootStrap, MaterialUI,
                    Yarn,
                    TailwindCSS, StyledComponents</p>
        </section>
    )
}

export default Skills
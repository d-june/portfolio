import React from "react";
import styles from "./Projects.module.scss"
import BtnGithub from "../btnGithub/BtnGithub";

const Project = ({image, title, description, ghPages, github}) => {
    return (
        <article className={styles.project}>
            <img src={image} alt={title} className={styles.projectImg}/>
            <h3 className={styles.projectTitle}>{title}</h3>
            <p className={styles.projectDescription}>{description}</p>
            <div className={styles.githubButtons}>
                <BtnGithub link={ghPages} text='GithubPages'/>
                <BtnGithub link={github} text='Github repo'/>
            </div>
        </article>
    )
}

export default Project;
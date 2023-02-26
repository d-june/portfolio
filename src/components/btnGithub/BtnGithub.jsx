import React from "react";
import "./BtnGithub.module.scss"
import GitHubIcon from '@mui/icons-material/GitHub';
import styles from './BtnGithub.module.scss'

const BtnGithub = ({link, text}) => {
    return (
        <a href={link} target="_blank" rel="noreferrer" className={styles.button}>
            <GitHubIcon />
            <div>{text}</div>
        </a>
    )
}

export default BtnGithub;
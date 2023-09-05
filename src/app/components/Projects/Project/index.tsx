import styles from "../Projects.module.scss";
import Image from "next/image";

import { FC } from "react";

type propsType = {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  tools: string;
  applicationPage: string;
  githubPage: string;
};

const Project: FC<propsType> = ({
  imageUrl,
  title,
  description,
  tools,
  applicationPage,
  githubPage,
}) => {
  return (
    <article className={styles.project}>
      <a href={applicationPage} target="_blank" className={styles.projectImage}>
        <Image src={imageUrl} alt={title} width={400} height={250} priority />
      </a>
      <div className={styles.projectContainer}>
        <div className={styles.projectContent}>
          <div className={styles.projectAboutContent}>
            <div>
              <h3 className={styles.projectTitle}>{title}</h3>
              <p className={styles.projectDescription}>{description}</p>
            </div>

            <a
              href={githubPage}
              target="_blank"
              className={styles.projectGithubLink}
            >
              Ссылка на Github репозиторий
            </a>
            <p className={styles.projectTools}>{tools}</p>

            <a
              href={applicationPage}
              target="_blank"
              className={styles.projectApplicationLink}
            >
              Открыть приложение
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Project;

import Project from "../components/project/Project";
import {useSelector} from "react-redux";
import styles from "../../src/components/project/Projects.module.scss"

const Projects = () => {
    const {layoutProjects} = useSelector(state => state.projects)
    const {reactProjects} = useSelector(state => state.projects)

    return (
        <>
            <main className={styles.projectsContainer}>
                <div className="container">
                    <h1 className={styles.title}>Проекты</h1>
                    <h2 className={styles.subtitle}>React</h2>
                    <ul className={styles.projects}>
                        {reactProjects.map((project) => {
                            return <Project key={project.id} id={project.id} title={project.title} image={project.image} description={project.description} ghPages={project.ghPages} github={project.github}/>
                        })}
                    </ul>
                    <h2 className={styles.subtitle}>Верстка</h2>
                    <ul className={styles.projects}>
                        {layoutProjects.map((project) => {
                            return <Project key={project.id} id={project.id} title={project.title} image={project.image} description={project.description} ghPages={project.ghPages} github={project.github}/>
                        })}
                    </ul>
                </div>
            </main>
        </>
    )
}

export default Projects;


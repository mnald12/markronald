import '../css/projects.css'
import { projects } from '../data/projects'

const Projects = () => {

    return (
        <>
            <div className="page">
                <div className='page-flex'>
                    <div className='page-left'>
                        <div className="projects">
                            {projects.map((project, id) => (
                                <div className='project' key={id}>
                                    <h3>{project.projectName}</h3>
                                    <p>{project.type}</p>
                                    <div className='p-flex'>
                                        {project.languages.map((lang, lid) => (
                                            <li key={lid}>{lang}</li>
                                        ))}
                                    </div>
                                    <img src={require(`../images/${project.projectImage}`)} alt='' />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='page-right'>
                        <div className='page-title'>
                            <h1>~ MY</h1>
                            <h1>Projects</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects
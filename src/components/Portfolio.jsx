import projects from '../data/projects'

export default function Portfolio(props) {
    const projectWidth = projects.length >= 4 ? 5 : (projects.length + 1)

    const projectEls = projects.map((project, i) => (
        <a className='portfolio-item-wrapper' href={project.link} target="_blank" key={i} style={{
            width: `calc(var(--section-max-width) / ${props.windowWidth >= 1024 ? projectWidth : 4})`
        }}>
            <h3 className='portfolio-item-title mobile'>{project.title}</h3>
            <div className='portfolio-item popped' style={{
                backgroundImage: `url('${project.img}')`
            }}>
                <div className='portfolio-item-content desktop'>
                    <h3 className='portfolio-item-title'>{project.title}</h3>
                    <p className='portfolio-item-description'>{project.description}</p>
                </div>
            </div>
            <p className='portfolio-item-description mobile'>{project.description}</p>
        </a>
    ))

    return (
        <div className='section' id='Portfolio'>
            <div className='portfolio-content section-limiter'>
                <h2 className='portfolio-title popped'>Portfolio</h2>
                <div className='portfolio-grid'>
                    {projectEls}
                </div>
            </div>
        </div>
    )
}
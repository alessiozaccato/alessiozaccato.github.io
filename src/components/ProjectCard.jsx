function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="project-tech">
        {project.technologies.map((tech, index) => (
          <span key={index} className="tech-tag">{tech}</span>
        ))}
      </div>
      <div className="project-links">
        {project.liveLink && <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-sm">Demo Live</a>}
        {project.githubLink && <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-sm">GitHub</a>}
      </div>
    </div>
  );
}

export default ProjectCard;
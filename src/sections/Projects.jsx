import ProjectCard from '../components/ProjectCard';

function Projects() {
  const projects = [
    {
      title: 'Sito Web React-Spring Ricettiamo',
      description: 'Un sito Web completo costruito con React per quanto riguarda il lato front-end, Spring per il back-end.',
      technologies: ['React', 'Spring', 'SpringBoot', 'SpringSecurity'],
      liveLink: '',
      githubLink: 'https://github.com/alessiozaccato/final-project'
    },
    {
      title: 'PawPlanet',
      description: 'Una applicazione web completa per la gestione di un negozio di animali domestici, pensata per offrire una esperienza moderna sia agli utenti che agli amministratori.',
      technologies: ['Node.js', 'Express.js', 'MySQL', 'React'],
      liveLink: '',
      githubLink: 'https://github.com/alessiozaccato/petShop'
    },
    // Aggiungi altri progetti
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2>I miei progetti</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;


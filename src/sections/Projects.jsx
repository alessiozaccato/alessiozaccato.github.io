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
      title: 'Blog Personale Node.js',
      description: 'Un blog semplice con autenticazione utente e un pannello di amministrazione.',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'EJS'],
      liveLink: '', // Lascia vuoto se non c'è una demo live
      githubLink: 'https://github.com/tuo-utente/node-blog'
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


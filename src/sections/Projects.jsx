import ProjectCard from '../components/ProjectCard';

function Projects() {
  const projects = [
    {
      title: 'Ricettiamo',
      description: 'Ricettiamo è una applicazione web sviluppata in Java con Spring Boot che permette di gestire, condividere e scoprire ricette di cucina in modo semplice e intuitivo.',
      technologies: ['React', 'Spring', 'SpringBoot', 'SpringSecurity'],
      liveLink: '',
      githubLink: 'https://github.com/alessiozaccato/final-project'
    },
    {
      title: 'Paw Planet',
      description: 'Una applicazione web completa per la gestione di un negozio di animali domestici, pensata per offrire una esperienza moderna sia agli utenti che agli amministratori.',
      technologies: ['Node.js', 'Express.js', 'MySQL', 'React'],
      liveLink: '',
      githubLink: 'https://github.com/alessiozaccato/petShop'
    },
    {
      title: 'Snake',
      description: 'Questo progetto è una semplice implementazione del classico gioco Snake in Java, con interfaccia grafica realizzata tramite Swing..',
      technologies: ['Java', 'Maven', 'Swing'],
      liveLink: '',
      githubLink: 'https://github.com/alessiozaccato/snake'
    },
    {
      title: 'Tris(Tic-Tac-Toe)',
      description: 'Gioco del Tris (Tic-Tac-Toe) in Java con interfaccia grafica Swing. Modalità Player vs CPU, colori personalizzati e schermata iniziale moderna.',
      technologies: ['Java', 'Maven', 'Swing'],
      liveLink: '',
      githubLink: 'https://github.com/alessiozaccato/tris'
    },
    {
      title: 'Web Tombola',
      description: 'Un semplice progetto web che simula il gioco della Tombola italiana, realizzato con HTML, CSS, Bootstrap e JavaScript.',
      technologies: ['Html','Css','JavaScript','Bootstrap'],
      liveLink: '',
      githubLink: 'https://github.com/alessiozaccato/web-tombola'
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




function Skills() {
  const skills = [
    { name: 'HTML5', icon: 'fab fa-html5' },
    { name: 'CSS3', icon: 'fab fa-css3-alt' },
    { name: 'JavaScript', icon: 'fab fa-js-square' },
    { name: 'React.js', icon: 'fab fa-react' },
    { name: 'Node.js', icon: 'fab fa-node-js' },
    { name: 'Express.js', icon: 'fas fa-server' },
    { name: 'Java', icon:"fa-brands fa-java" },
    { name: 'Spring', icon: 'fa-solid fa-leaf' },
    { name: 'Git & GitHub', icon: 'fab fa-github' },
    
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2>Le mie competenze</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <i className={skill.icon}></i>
              <h3>{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
import cvPdf from '../assets/cv.pdf';

function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="container">
        {/* <img src={profilePic} alt="La mia foto profilo" className="profile-pic" /> */}
        <h1>Ciao, sono Alessio Zaccato</h1>
        <p>Un Web Developer appassionato e creativo.</p>
        <a href="#projects" className="btn btn-primary">Guarda i miei progetti</a>
        <a href={cvPdf} download className="btn btn-secondary">Scarica il mio CV</a>
      </div>
    </section>
  );
}

export default Hero;
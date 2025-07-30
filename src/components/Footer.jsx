
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Alessio Zaccato. Tutti i diritti riservati.</p>
        <div className="social-links">
          <a href="https://github.com/alessiozaccato" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/alessiozaccato" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
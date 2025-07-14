

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <a href="#hero" className="logo">Il Mio Portfolio</a>
        <ul className="nav-links">
          <li><a href="#about">Chi Sono</a></li>
          <li><a href="#skills">Competenze</a></li>
          <li><a href="#projects">Progetti</a></li>
          <li><a href="#contact">Contatti</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
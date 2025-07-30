


import React, { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="container">
        <a href="#hero" className="logo">Il Mio Portfolio</a>
        <button
          className={`hamburger${open ? " open" : ""}`}
          aria-label="Menu"
          onClick={() => setOpen(!open)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <ul className={`nav-links${open ? " open" : ""}`}>
          <li><a href="#about" onClick={() => setOpen(false)}>Chi Sono</a></li>
          <li><a href="#skills" onClick={() => setOpen(false)}>Competenze</a></li>
          <li><a href="#projects" onClick={() => setOpen(false)}>Progetti</a></li>
          <li><a href="#contact" onClick={() => setOpen(false)}>Contatti</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
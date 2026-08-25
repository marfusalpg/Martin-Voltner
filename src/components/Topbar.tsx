const Topbar = () => (
  <header className="topbar">
    <a href="#top" className="brand">
      Martin Voltner
    </a>

    <nav className="nav-menu" aria-label="Main navigation">
      <a href="#about">About me</a>
      <a href="#experience">Experience</a>
      <a href="#contact">Contact</a>
    </nav>

    <a className="nav-pill" href="mailto:voltner.martin@gmail.com">
      Email
    </a>
  </header>
);

export default Topbar;

const Hero = () => (
  <section className="hero">
    <div className="hero-orb" aria-hidden="true" />

    <div className="hero-layout">
      <div className="hero-title-wrap">
        <h1 className="hero-title">
          <span className="block">MARTIN</span>
          <span className="block">VOLTNER</span>
        </h1>
      </div>

      <div className="hero-copy">
        <div className="line" />
        <p>
          I am a BSc student in Computer Science at Palacký University
          Olomouc and a passionate software developer.
        </p>
        <div className="line" />
      </div>
    </div>

    <div className="hero-bar">
      <a href="#experience" className="circle-link">
        About
      </a>
      <p>Olomouc, Czech Republic</p>
      <p>© 2026 Martin Voltner</p>
    </div>
  </section>
);

export default Hero;

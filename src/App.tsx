import React, { useEffect, useState } from "react";
import "./App.css";

const education = [
  {
    title: "BSc., Computer Science",
    location: "Palacký University Olomouc",
    detail: "Programming & Software Development",
    period: "2025-Now",
  },
  {
    title: "High School",
    location: "Gymnázium Lesní čtvrť",
    detail: "",
    period: "2021-2025",
  },
];

const employment = [
  {
    title: "Freelance",
    location: "3D Modeling",
    detail: "",
    period: "2024 - Now",
  },
  {
    title: "Fushix_",
    location: "3D Designer, Graphical Designer",
    detail: "Sidehustle",
    period: "2020 - Now",
  },
];

const contactItems = [
  {
    label: "E-mail",
    value: "voltner.martin@gmail.com",
    href: "mailto:voltner.martin@gmail.com",
  },
  {
    label: "Instagram",
    value: "fushin_bum",
    href: "https://www.instagram.com/fushin_bum/",
  },
  {
    label: "Discord",
    value: "fushin_bum",
    href: undefined,
  },
];

function App() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowScroll(window.scrollY > 200);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="portfolio-shell">
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

      <main id="top">
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

        <section id="about" className="about">
          <p className="section-kicker">/ About me</p>

          <div className="about-copy">
            <p className="headline">
              I build thoughtful software, playful visuals and clean digital
              experiences.
            </p>

            <div className="about-grid">
              <p>
                Hi, I&apos;m <span className="highlight">Martin</span>. I am a
                BSc student in Computer Science at Palacký University Olomouc
                and a passionate software developer. My areas of interest
                include Web Development, creating Windows applications, computer
                games and 3D modeling.
              </p>

              <p>
                I enjoy crafting practical solutions that feel polished and
                useful, whether I&apos;m working on an interface, a visual asset
                or a creative prototype.
              </p>
            </div>
          </div>
        </section>

        <section id="experience" className="experience">
          <div className="experience-header">
            <h2>Experience</h2>
            <span>Education / Work</span>
          </div>

          <div className="experience-grid">
            <div className="info-group">
              <div className="group-label">Education</div>

              {education.map((item) => (
                <article key={item.title} className="timeline-item">
                  <div className="timeline-dot" aria-hidden="true" />
                  <div className="timeline-copy">
                    <h3>{item.title}</h3>
                    {item.location ? <p>{item.location}</p> : null}
                    {item.detail ? <p>{item.detail}</p> : null}
                    <p>{item.period}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="info-group">
              <div className="group-label">Employment</div>

              {employment.map((item) => (
                <article key={item.title} className="timeline-item">
                  <div className="timeline-dot" aria-hidden="true" />
                  <div className="timeline-copy">
                    <h3>{item.title}</h3>
                    {item.location ? <p>{item.location}</p> : null}
                    {item.detail ? <p>{item.detail}</p> : null}
                    <p>{item.period}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="contact-copy">
            <p className="section-kicker">/ Contact</p>
            <h2>Let&apos;s talk.</h2>
            <p className="cta">
              I&apos;m open to ideas, collaborations and creative projects.
            </p>
          </div>

          <div className="contact-card">
            <form
              className="contact-form"
              action="https://formspree.io/f/xzepndqe"
              method="POST"
            >
              <div className="form-row">
                <label>
                  Name
                  <input type="text" name="name" required />
                </label>

                <label>
                  E-mail
                  <input type="email" name="email" required />
                </label>
              </div>

              <label>
                Subject
                <input type="text" name="subject" required />
              </label>

              <label>
                Message
                <textarea name="message" rows={6} required />
              </label>

              <button type="submit" className="send-button">
                Send Message
              </button>
            </form>

            <div className="social-bubbles" aria-hidden="false">
              {contactItems.map((item) => {
                const href =
                  item.href ??
                  (item.label === "E-mail"
                    ? `mailto:${item.value}`
                    : undefined);
                return href ? (
                  <a
                    key={item.label}
                    className="bubble"
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    {item.label}
                  </a>
                ) : (
                  <span key={item.label} className="bubble">
                    {item.label}
                  </span>
                );
              })}
            </div>
          </div>
        </section>

        <button
          className={`scroll-top ${showScroll ? "visible" : "hidden"}`}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
        >
          <span className="arrow">↑</span>
        </button>
      </main>
    </div>
  );
}

export default App;

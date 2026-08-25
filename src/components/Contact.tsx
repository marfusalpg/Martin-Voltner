import { contactItems } from "../data/content";

const Contact = () => (
  <section id="contact" className="contact">
    <div className="contact-copy">
      <p className="section-kicker">/ Contact</p>
      <h2>Let&apos;s talk.</h2>
      <p className="cta">I&apos;m open to ideas, collaborations and creative projects.</p>
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
            (item.label === "E-mail" ? `mailto:${item.value}` : undefined);
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
);

export default Contact;

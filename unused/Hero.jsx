import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-tag">Available for opportunities · May 2026</div>
      <h1>
        Elias<br />
        <span>Segura</span>
      </h1>
      <p className="hero-sub">
        CS graduate from LMU that has built cross-platform apps, robots GUI's, and anything
        that solves a real problem. Based in Los Angeles.
      </p>
      <div className="hero-actions">
        <a className="btn-primary" href="mailto:eliassegura1000@gmail.com">
          Get in touch ↗
        </a>
        <a
          className="btn-ghost"
          href="https://github.com/eliassegura100"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          className="btn-ghost"
          href="https://www.linkedin.com/in/elias-segura-cs/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}

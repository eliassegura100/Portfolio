import { useEffect, useRef } from 'react';
import './Hero.css';

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed');
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-tag">Available for opportunities · May 2026</div>
          <h1>
            Elias<br />
            <span>Segura</span>
          </h1>
          <p className="hero-sub">
            CS graduate from LMU that has built cross-platform apps, robot GUIs, and anything
            that solves a real problem. Based in Los Angeles.
          </p>
          <div className="hero-actions">
            <a className="btn-primary" href="mailto:eliassegura1000@gmail.com">
              Get in touch ↗
            </a>
            <a className="btn-ghost" href="https://github.com/eliassegura100" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="btn-ghost" href="https://www.linkedin.com/in/elias-segura-cs/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>

        {/* Photo slot — replace src with your actual photo path */}
        <div className="hero-photo-wrap">
          <div className="hero-photo-frame">
            <img
              src="/images/elias_cropped.jpg"
              alt="Elias Segura"
              className="hero-photo"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            {/* <div className="hero-photo-placeholder">
              <span>ES</span>
            </div> */}
          </div>
          <div className="hero-photo-accent" />
        </div>
      </div>

      {/* Quick stats strip */}
      <div className="hero-stats">
        <div className="hero-stat">
          <span className="hero-stat-num">3.49</span>
          <span className="hero-stat-label">GPA</span>
        </div>
        <div className="hero-stat-divider" />
        <div className="hero-stat">
          <span className="hero-stat-num">20+</span>
          <span className="hero-stat-label">Projects</span>
        </div>
        <div className="hero-stat-divider" />
        <div className="hero-stat">
          <span className="hero-stat-num">4</span>
          <span className="hero-stat-label">Clubs</span>
        </div>
        <div className="hero-stat-divider" />
        <div className="hero-stat">
          <span className="hero-stat-num">22+</span>
          <span className="hero-stat-label">Technologies</span>
        </div>
      </div>
    </section>
  );
}

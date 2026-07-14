import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

const projects = [
  {
    title: 'EV Charging Network Analytics',
    badge: 'Solo · Active',
    featured: true,
    size: 'large',
    description: (
      <>
        A full-stack analytics dashboard for EV charger network health, built on 3,395 real
        charging sessions from a Georgia Tech field study. Uses SQL window functions to flag
        underperforming chargers and rank stations for field inspection, every chart exposes its
        live, editable SQL.{' '}
        <strong style={{ color: '#00aeff' }}>Note:</strong> Site may take 30s to load due to Render cold start.
      </>
    ),
    tags: ['Python', 'FastAPI', 'DuckDB', 'SQL', 'React', 'TypeScript', 'Recharts', 'pandas'],
    links: [
      { label: 'GitHub ↗', href: 'https://github.com/eliassegura100/EV-Charging-Stations', external: true },
      { label: 'Website ↗', href: 'https://ev-charging-network-analytics.netlify.app/', external: true },
    ],
  },
  {
    title: 'BarScout',
    badge: 'Lead · Active',
    featured: false,
    size: 'small',
    description:
      'Cross-platform nightlife app for discovering bars, deals, and events. Dual portals for customers and managers, Uber/Lyft integration, and international partnerships in Sweden.',
    tags: ['React Native', 'TypeScript', 'Swift', 'Firebase', 'Uber API'],
    links: [
      { label: 'GitHub ↗', href: 'https://github.com/eliassegura100/BarScout', external: true },
      { label: 'Case study →', href: '/projects/barscout', external: false },
    ],
  },
  {
    title: 'Pipethon',
    badge: 'Lead · Completed',
    featured: false,
    size: 'small',
    description:
      'A modern programming language built for AI-powered apps, designed around pipeline composition (|>) and exhaustive pattern matching. Compiles to JavaScript.',
    tags: ['JavaScript', 'Ohm.js', 'Compilers', 'Language Design'],
    links: [
      { label: 'GitHub ↗', href: 'https://github.com/eliassegura100/Pipethon/tree/main', external: true },
      { label: 'Case study →', href: '/projects/pipethon', external: false },
    ],
  },
];

function ProjectCard({ project }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
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
    <div
      ref={cardRef}
      className={`project-card project-card--${project.size}${project.featured ? ' featured' : ''} reveal-card`}
    >
      {project.featured && (
        <div className="project-featured-label">Featured</div>
      )}
      <div className="project-meta">
        <div className="project-title">{project.title}</div>
        <div className="project-badge">{project.badge}</div>
      </div>
      <p className="project-desc">{project.description}</p>
      <div className="project-tags">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
      <div className="project-links">
        {project.links.map((link) =>
          link.external ? (
            <a key={link.label} className="project-link" href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ) : (
            <Link key={link.label} className="project-link" to={link.href}>
              {link.label}
            </Link>
          )
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const headerRef = useRef(null);

  useEffect(() => {
    const el = headerRef.current;
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
    <section className="section" id="projects">
      <div className="section-label reveal-header" ref={headerRef}>Selected projects</div>
      <div className="bento-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

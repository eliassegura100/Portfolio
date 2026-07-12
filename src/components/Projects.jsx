import { Link } from 'react-router-dom';
import './Projects.css';

const projects = [
  {
    title: 'EV Charging Network Analytics',
    badge: 'Solo · Active',
    featured: true,
    description: (
      <>
        A full-stack analytics dashboard for EV charger network health, built on 3,395 real
        charging sessions from a Georgia Tech field study. Uses SQL window functions to flag
        underperforming chargers and rank stations for field inspection, every chart exposes its
        live, editable SQL. Built to mirror the monitoring workflow of a charging network data
        science team. <strong style={{ color: '#00aeff' }}>Side-note</strong>: Website might take 30 seconds to load fully due
        to Render&apos;s backend deployment.
      </>
    ),
    tags: ['Python', 'FastAPI', 'DuckDB', 'SQL', 'React', 'TypeScript', 'Recharts', 'pandas'],
    links: [
      { label: 'GitHub ↗', href: 'https://github.com/eliassegura100/EV-Charging-Stations' },
      { label: 'Website →', external: false, href: 'https://ev-charging-network-analytics.netlify.app/' },
    ],
  },
  {
    title: 'BarScout',
    badge: 'Lead · Active',
    featured: false,
    description:
      'A cross-platform nightlife planning app for discovering bars, clubs, and drink deals. Features dual portals for customers and venue managers, Uber/Lyft API integration for safe nights out, and international partnerships in Sweden.',
    tags: ['React', 'JavaScript', 'TypeScript', 'Swift', 'Uber API', 'Lyft API', 'Expo Go'],
    links: [
      { label: 'GitHub ↗', href: 'https://github.com/eliassegura100/BarScout' },
      // { label: 'Demo via Expo Go ↗', href: '#' }, (For now until the demo is ready)
      { label: 'Case study →', href: '/projects/barscout', external: false },
    ],
  },
  {
    title: 'Pipethon',
    badge: 'Lead · Completed',
    featured: false,
    description:
      'Pipethon is a modern programming language built for the age of intelligent systems. Designed around two powerful primitives, pipeline composition and pattern matching, Pipethon gives developers a clean, expressive way to build AI-powered applications without the boilerplate, fragility, and complexity of traditional code.',
    tags: ['JavaScript', 'Ohm.js', 'Compilers', 'Static Analysis', 'Language Design'],
    links: [
      { label: 'GitHub ↗', href: 'https://github.com/eliassegura100/Pipethon/tree/main' },
      { label: 'Case study →', href: '/projects/pipethon', external: false },
    ],
  },
];

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section-label">Selected projects</div>
      <div className="projects-grid">
        {projects.map((project) => (
          <div
            key={project.num}
            className={`project-card${project.featured ? ' featured' : ''}`}
          >
            <div className="project-meta">
              <div className="project-title">{project.title}</div>
              <div className="project-badge">{project.badge}</div>
            </div>
            <p className="project-desc">{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
            <div className="project-links">
              {project.links.map((link) => 
                link.external ? (
                  <a
                    key={link.label}
                    className="project-link"
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    className="project-link"
                    to={link.href}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

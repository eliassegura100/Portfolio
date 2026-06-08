import { Link } from 'react-router-dom';
import './Projects.css';

const projects = [
  {
    num: '01',
    title: 'BarScout',
    badge: 'Lead · Active',
    featured: true,
    description:
      'A cross-platform nightlife planning app for discovering bars, clubs, and drink deals. Features dual portals for customers and venue managers, Uber/Lyft API integration for safe nights out, and international partnerships in Sweden.',
    tags: ['React', 'JavaScript', 'TypeScript', 'Swift', 'Uber API', 'Lyft API', 'Expo Go'],
    links: [
      { label: 'GitHub ↗', href: 'https://github.com/eliassegura100' },
      { label: 'Demo via Expo Go ↗', href: '#' },
      { label: 'Case study →', href: '/projects/barscout', external: false },
    ],
  },
  {
    num: '02',
    title: 'Pipethon',
    badge: 'Lead · Completed',
    featured: false,
    description:
      'Pipethon is a modern programming language built for the age of intelligent systems. Designed around two powerful primitives, pipeline composition and pattern matching, Pipethon gives developers a clean, expressive way to build AI-powered applications without the boilerplate, fragility, and complexity of traditional code.',
    tags: ['React', 'TypeScript', 'Firebase', 'Google Maps API'],
    links: [
      { label: 'GitHub ↗', href: 'https://github.com/eliassegura100' },
    ],
  },
  {
    num: '03',
    title: 'LMU ROBO Arm GUI',
    badge: 'Team Lead · Active',
    featured: false,
    description:
      'Leading a team of college developers to build a Python GUI for controlling a robotic arm. Manages weekly standups, onboards team members to Python, and drives the full software lifecycle.',
    tags: ['Python', 'PyQt6', 'Robotics'],
    links: [
      { label: 'GitHub ↗', href: 'https://github.com/eliassegura100' },
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
            data-num={project.num}
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

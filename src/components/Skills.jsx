import './Skills.css';

const skills = [
  'C++', 'JavaScript', 'Python', 'Swift', 'SwiftUI',
  'React', 'TypeScript', 'Java', 'PostgreSQL', 'Firebase',
  'NASM', 'Unity', 'PyQt6', 'Git',
];

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section-label">Tech stack</div>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill} className="skill-item">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

import './Skills.css';

const skills = [
  'Python', 'JavaScript', 'C++', 'Swift', 'SwiftUI',
  'React', 'TypeScript', 'Java', 'PostgreSQL', 'Firebase', 'Supabase',
  'Rust', 'NASM', 'Unity', 'PyQt6', 'Git', 'pandas', 'NumPy', 'Matplotlib',
  'FastAPI', 'Ohm.js', 'DuckDB'
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

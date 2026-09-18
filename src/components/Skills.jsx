import { useReveal } from '../hooks/useReveal';
import './Skills.css';

const topSkills = [
  {
    name: 'Python',
    desc: 'Primary language for data pipelines, backend APIs, and scripting. Used in EV Analytics (FastAPI, pandas, DuckDB) and LMU ROBO (PyQt6).',
    tags: ['FastAPI', 'pandas', 'NumPy', 'Matplotlib', 'PyQt6', 'DuckDB'],
  },
  {
    name: 'SQL',
    desc: 'Window functions, CTEs, aggregations, and query optimization. Built live editable SQL dashboards in the EV Analytics project using DuckDB.',
    tags: ['DuckDB', 'PostgreSQL', 'Window Functions', 'CTEs'],
  },
  {
    name: 'JavaScript',
    desc: 'Full-stack JS across compiler design (Ohm.js/Pipethon), frontend (React, TypeScript), and mobile (React Native/Expo for BarScout).',
    tags: ['React', 'TypeScript', 'React Native', 'Ohm.js', 'Node.js'],
  },
];

const allSkills = [
  'Python', 'JavaScript', 'C++', 'Swift', 'SwiftUI',
  'React', 'TypeScript', 'Java', 'PostgreSQL', 'Firebase', 'Supabase',
  'Rust', 'NASM', 'Unity', 'PyQt6', 'Git', 'pandas', 'NumPy', 'Matplotlib',
  'FastAPI', 'Ohm.js', 'DuckDB',
];

const marqueeSkills = [...allSkills, ...allSkills];

export default function Skills() {
  const sectionRef = useReveal(0.1);

  return (
    <section className="section reveal-skills" id="skills" ref={sectionRef}>
      <div className="section-label">Tech stack</div>

      {/* Most skilled in */}
      <div className="top-skills-label">Most skilled in</div>
      <div className="top-skills-grid">
        {topSkills.map((skill, i) => (
          <div key={skill.name} className="top-skill-card" style={{ transitionDelay: `${i * 0.1}s` }}>
            <div className="top-skill-name">{skill.name}</div>
            <p className="top-skill-desc">{skill.desc}</p>
            <div className="top-skill-tags">
              {skill.tags.map((tag) => (
                <span key={tag} className="top-skill-tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Marquee — full stack */}
      <div className="skills-marquee-wrap">
        <div className="skills-marquee">
          {marqueeSkills.map((skill, i) => (
            <span key={i} className="skills-marquee-item">
              {skill} <span className="skills-marquee-dot">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}


// import { useReveal } from '../hooks/useReveal';
// import './Skills.css';

// const skills = [
//   'Python', 'JavaScript', 'C++', 'Swift', 'SwiftUI',
//   'React', 'TypeScript', 'Java', 'PostgreSQL', 'Firebase', 'Supabase',
//   'Rust', 'NASM', 'Unity', 'PyQt6', 'Git', 'pandas', 'NumPy', 'Matplotlib',
//   'FastAPI', 'Ohm.js', 'DuckDB',
// ];

// // Duplicate for seamless loop
// const marqueeSkills = [...skills, ...skills];

// export default function Skills() {
//   const sectionRef = useReveal(0.1);

//   return (
//     <section className="section reveal-skills" id="skills" ref={sectionRef}>
//       <div className="section-label">Tech stack</div>

//       {/* Static grid — visible on hover */}
//       <div className="skills-grid">
//         {skills.map((skill) => (
//           <div key={skill} className="skill-item">
//             {skill}
//           </div>
//         ))}
//       </div>

//       {/* Marquee strip below */}
//       <div className="skills-marquee-wrap">
//         <div className="skills-marquee">
//           {marqueeSkills.map((skill, i) => (
//             <span key={i} className="skills-marquee-item">
//               {skill} <span className="skills-marquee-dot">·</span>
//             </span>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

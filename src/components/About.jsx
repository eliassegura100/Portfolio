import './About.css';

const stats = [
  { num: '3.41', label: 'GPA' },
  { num: '3+', label: 'Projects' },
  { num: '4', label: 'Clubs' },
];

export default function About() {
  return (
    <section className="section" id="about">
      <div className="section-label">About</div>
      <div className="about-grid">
        <div>
          <p className="about-text">
            I'm a CS senior at Loyola Marymount University (GPA 3.41) graduating
            May 2026. I build things that matter — from nightlife apps with real
            industry partnerships to hackathon tools that help communities.
          </p>
          <p className="about-text" style={{ marginTop: '16px' }}>
            Active in NSBE, ACM, ASA, and ROBO. I lead teams, write docs, and
            ship code. Currently open to full-time SWE roles starting summer 2026.
          </p>
          <div className="stats-row">
            {stats.map((s) => (
              <div key={s.label} className="about-stat">
                <span className="about-stat-num">{s.num}</span>
                <span className="about-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="about-text">
            Education: B.S. Computer Science, LMU · May 2026
          </p>
          <p className="about-text" style={{ marginTop: '12px' }}>
            Coursework includes AI, OS, Algorithms, Databases, Mobile Apps, and
            Interaction Design.
          </p>
          <p className="about-text" style={{ marginTop: '12px' }}>
            Awards: Xavier Award · LMU Grant · Federal SEOG Grant
          </p>
          <p className="about-text" style={{ marginTop: '12px' }}>
            Work: Senior Recreation Leader at El Segundo Recreation Park —
            managing staff, maintaining databases, and improving UX for
            public-facing systems.
          </p>
        </div>
      </div>
    </section>
  );
}

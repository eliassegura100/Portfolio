import './Nav.css';

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-logo" aria-label="ES logo">
        <span className="nav-logo-e">E</span>
        <span className="nav-logo-s">S</span>
      </div>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

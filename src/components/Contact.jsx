import './Contact.css';

const contactLinks = [
  { label: 'eliassegura1000@gmail.com', href: 'mailto:eliassegura1000@gmail.com' },
  { label: '(310) 948-0380', href: 'tel:3109480380' },
  { label: 'linkedin.com/in/eliasseguracs', href: 'https://www.linkedin.com/in/eliasseguracs' },
  { label: 'github.com/eliassegura100', href: 'https://github.com/eliassegura100' },
];

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="contact-inner">
        <div>
          <div className="section-label">Contact</div>
          <div className="contact-heading">
            Let's build<br />something.
          </div>
        </div>
        <div className="contact-links">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              className="contact-link"
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
            >
              <span className="contact-link-dot" />
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

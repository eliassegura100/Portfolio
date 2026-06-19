import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FunnelPlus, CarTaxiFrontIcon, UsersRound, Speech, MapPinned } from 'lucide-react'; 
import './BarScoutPage.css';

// Convert all screenshots in the barscout folder into an object mapping filenames to URLs
const screenshots = import.meta.glob('/src/assets/*.{png,PNG,jpg,JPG,jpeg,JPEG,webp,WEBP}', { eager: true });

// Convert the imported screenshots into an array of { src, label } objects for easier rendering
const rawScreenshots = Object.entries(screenshots).map(([path, mod]) => ({
  src: mod.default,
  filename: path.split('/').pop(),
}))

console.log('Raw screenshots:', rawScreenshots.map(s => s.filename));

const screenGroups = [
  {
    label: 'For You',
    images: rawScreenshots.filter(s => s.filename.startsWith('BarScout_For_You')),
  },
  {
    label: 'Bars near you',
    images: rawScreenshots.filter(s => s.filename.startsWith('Bars_Near_You')),
  },
  {
    label: 'Filter',
    images: rawScreenshots.filter(s => s.filename.startsWith('Filter')),
  },
  {
    label: 'Map',
    images: rawScreenshots.filter(s => s.filename.startsWith('Map')),
  },
  {
    label: 'Bar detail',
    images: rawScreenshots.filter(s => s.filename.startsWith('Bar_Detail')),
  },
  {
    label: 'Profile',
    images: rawScreenshots.filter(s => s.filename.startsWith('Profile')),
  },
];

const techStack = [
  { label: 'React Native', category: 'Frontend' },
  { label: 'Expo', category: 'Frontend' },
  { label: 'Swift / SwiftUI', category: 'Frontend' },
  { label: 'TypeScript', category: 'Frontend' },
  { label: 'Firebase Auth', category: 'Backend' },
  { label: 'Firestore', category: 'Backend' },
  { label: 'Cloud Functions', category: 'Backend' },
  { label: 'Node.js', category: 'Backend' },
  { label: 'Apple Maps API', category: 'Integration' },
  { label: 'Uber API', category: 'Integration' },
  { label: 'Lyft API', category: 'Integration' },
  { label: 'React Query', category: 'Integration' },
];

const screenDescriptions = {
  'For You': {
    num: '1',
    desc: "Personalized home screen showing today's specials, upcoming events, your favorite bars, and curated recommendations. Cards are large tap targets layered with name, category, rating, distance, and drink pricing hints.",
  },
  'Bars near you': {
    num: '2',
    desc: 'Scrollable catalog of nearby bars with a bottom-sheet filter panel for sort order, max distance, max price, and minimum rating. Keeps the main list uncluttered while making filters easy to discover.',
  },
  'Filter': {
    num: '3',
    desc: 'A bottom sheet slides up from the list view with sort controls (distance, rating, price), a max distance slider, a max price slider, and a minimum rating slider. Reset and Apply buttons keep actions clear and reversible.',
  },
  'Map': {
    num: '4',
    desc: "Interactive Apple Maps view centered on the user's location. Pink pin markers represent bars — tap any marker to preview basic info and navigate to the full detail screen.",
  },
  'Bar detail': {
    num: '5',
    desc: 'Full-width hero image, rating, price level, distance, address, hours, popular drinks list, user reviews, and rideshare cards for UberX / UberXL / Uber Black with deep-link integration.',
  },
  'Profile': {
    num: '6',
    desc: 'Avatar, stats (Favorites, Tickets, Reviews), tabbed views for saved bars and event tickets, and a "Switch to Manager Portal" CTA for eligible users with elevated roles.',
  },
};

const features = [
  { icon: '$', label: 'Drink price transparency', desc: 'Beer, shot, and mixed drink prices surfaced before you arrive — no surprises at the bar.' },
  { icon: <FunnelPlus />, label: 'Smart filtering', desc: 'Filter by distance, price range, rating, and deal type from a clean bottom-sheet panel.' },
  { icon: <CarTaxiFrontIcon />, label: 'Rideshare integration', desc: 'One-tap Uber and Lyft deep links from the bar detail screen to get you there safely.' },
  { icon: <UsersRound />, label: 'Dual user system', desc: 'Separate customer and manager portals — patrons discover, managers update pricing and promote events.' },
  { icon: <Speech />, label: 'Crowdsourced updates', desc: 'Users submit price updates which enter a moderation queue; admins approve before they go live.' },
  { icon: <MapPinned />, label: 'Geo-radius queries', desc: 'Geohash-based Firestore queries efficiently surface only the bars within your chosen radius.' },
];

const milestones = [
  { phase: 'Milestone 1', weeks: 'Wk 6–7', label: 'Foundation', items: ['Firebase Auth', 'Firestore schema', 'Map setup', 'Bar markers'] },
  { phase: 'Milestone 2', weeks: 'Wk 8–9', label: 'Data', items: ['Crowd submissions', 'Image upload', 'Admin console', 'Moderation queue'] },
  { phase: 'Milestone 3', weeks: 'Wk 10–11', label: 'Lists & Sort', items: ['List view', 'Sorting', 'Favorites'] },
  { phase: 'Milestone 4', weeks: 'Wk 12–14', label: 'Polish', items: ['Caching', 'Last verified', 'CI/CD', 'Aesthetics'] },
  { phase: 'Milestone 5', weeks: 'Wk 15–16', label: 'Rideshare', items: ['Uber API', 'Lyft API', 'Deep links'] },
];

const designInsights = [
  { label: 'Inspiration', text: 'Dark-mode entertainment apps (Spotify, Apple Music) drove the deep palette and bright accents. Yelp and Google Maps informed the discover → list → detail flow.' },
  { label: 'Anti-inspiration', text: 'Dense map apps that overwhelm users with everything at once. Filters were deliberately pulled into a separate bottom sheet to keep the main list clean.' },
  { label: 'Iteration', text: 'Went from web-first Figma → React Native. Tried inline filters vs a filter sheet — the sheet won. Navigation initially exposed bottom tabs everywhere until state management required a refactor.' },
  { label: 'What worked', text: 'A shared theme file (colors, spacing, type) kept all screens visually in sync. Coding against Figma screenshots made it easy to catch spacing and hierarchy mismatches early.' },
  { label: 'Next time', text: 'Start with a minimal design system earlier to avoid restyling. Plan usability testing around small clickable prototypes rather than adjusting after full implementation.' },
];

export default function BarScoutPage() {
  const navigate = useNavigate();
  const [activeGroup, setActiveGroup] = useState(null);
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    const first = screenGroups.find(g => g.images.length > 0);
    if (first) setActiveGroup(first);

    window.scrollTo(0, 0);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setLightbox(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="bs-root">

      {/* Back */}
      <button className="bs-back" onClick={() => navigate(-1)}>
        ← Back
      </button>

      {/* Hero */}
      <header className="bs-hero">
        <div className="bs-hero-eyebrow">
          <span className="bs-tag">Active · Aug 2025 – Present</span>
          <span className="bs-tag">Project Lead</span>
        </div>
        <h1 className="bs-title">BarScout</h1>
        <p className="bs-subtitle">
          Nightlife discovery app that shows you drink prices, events, and deals
          at bars near you, before you leave the house.
        </p>
        <div className="bs-hero-links">
          <a
            className="bs-btn-primary"
            href="https://github.com/eliassegura100/BarScout"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
          <span className="bs-btn-ghost">Demo via Expo Go</span>
        </div>
        <div className="bs-hero-meta">
          <div className="bs-meta-item">
            <span className="bs-meta-label">Team</span>
            <span className="bs-meta-val">Garnik Gevorkyan, Elias Segura, Riley Vegting</span>
          </div>
          <div className="bs-meta-item">
            <span className="bs-meta-label">Role</span>
            <span className="bs-meta-val">Developer, Project Lead, UI/UX Design</span>
          </div>
          <div className="bs-meta-item">
            <span className="bs-meta-label">Platform</span>
            <span className="bs-meta-val">iOS (iPhone 11+)</span>
          </div>
          <div className="bs-meta-item">
            <span className="bs-meta-label">Partnerships</span>
            <span className="bs-meta-val">Swedish industry contacts (Swedish House Mafia mgmt.)</span>
          </div>
        </div>
      </header>

      {/* Problem */}
      <section className="bs-section">
        <div className="bs-section-label">The problem</div>
        <div className="bs-two-col">
          <div className="bs-problem-card">
            <div className="bs-problem-num">1</div>
            <p className="bs-problem-text">
              Students planning a night out have no easy way to answer: <em>"Which bar nearby actually has good happy-hour deals tonight?"</em> Drink prices aren't listed online — you find out when the bill arrives.
            </p>
          </div>
          <div className="bs-problem-card">
            <div className="bs-problem-num">2</div>
            <p className="bs-problem-text">
              Bar front-of-house staff manage guests with ad-hoc tools — shared spreadsheets, handwritten notes, group chats. There's a gap between full POS systems and lightweight, visually clear operational tools.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bs-section">
        <div className="bs-section-label">Core features</div>
        <div className="bs-features-grid">
          {features.map((f) => (
            <div key={f.label} className="bs-feature-card">
              <div className="bs-feature-icon">{f.icon}</div>
              <div className="bs-feature-label">{f.label}</div>
              <div className="bs-feature-desc">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Screens + Gallery — unified */}
      <section className="bs-section">
        <div className="bs-section-label">App screens</div>

        <div className="bs-unified-layout">

          {/* Thumbnails */}
          <div className="bs-ft-thumbs">
            {screenGroups.filter(g => g.images.length > 0).map((group) => (
              <div
                key={group.label}
                className={`bs-ft-thumb ${activeGroup?.label === group.label ? 'active' : ''}`}
                onClick={() => setActiveGroup(group)}
              >
                <div className="bs-ft-thumb-frames">
                  {group.images.map((img) => (
                    <img key={img.src} src={img.src} alt={group.label} className="bs-ft-thumb-img" />
                  ))}
                </div>
                <span className="bs-ft-thumb-label">{group.label}</span>
              </div>
            ))}
          </div>

          {/* Featured image */}
          {activeGroup && (
            <div
              className="bs-ft-featured"
              key={activeGroup.label}
            >
              {activeGroup.images.length === 2 ? (
                <div className="bs-ft-double">
                  <img
                    src={activeGroup.images[0].src}
                    alt={activeGroup.label}
                    className="bs-ft-featured-img bs-ft-clickable"
                    onClick={() => setLightbox(activeGroup.images[0].src)}
                  />
                  <img
                    src={activeGroup.images[1].src}
                    alt={activeGroup.label}
                    className="bs-ft-featured-img bs-ft-clickable"
                    onClick={() => setLightbox(activeGroup.images[1].src)}
                  />
                </div>
              ) : (
                <img
                  src={activeGroup.images[0].src}
                  alt={activeGroup.label}
                  className="bs-ft-featured-img bs-ft-clickable"
                  onClick={() => setLightbox(activeGroup.images[0].src)}
                />
              )}
              <div className="bs-ft-featured-label">
                {activeGroup.label}
              </div>
            </div>
          )}

          {/* Description panel */}
          {activeGroup && screenDescriptions[activeGroup.label] && (
            <div className="bs-screen-info" key={activeGroup.label + '-desc'}>
              <div className="bs-screen-info-num">
                {screenDescriptions[activeGroup.label].num}
              </div>
              <h3 className="bs-screen-info-title">{activeGroup.label}</h3>
              <p className="bs-screen-info-desc">
                {screenDescriptions[activeGroup.label].desc}
              </p>
              <div className="bs-screen-info-hint">
                ← click image to expand
              </div>
            </div>
          )}

        </div>
      </section>

      {/* Tech stack */}
      <section className="bs-section">
        <div className="bs-section-label">Tech stack</div>
        <div className="bs-stack-groups">
          {['Frontend', 'Backend', 'Integration'].map((cat) => (
            <div key={cat} className="bs-stack-group">
              <div className="bs-stack-cat">{cat}</div>
              <div className="bs-stack-tags">
                {techStack
                  .filter((t) => t.category === cat)
                  .map((t) => (
                    <span key={t.label} className="bs-stack-tag">
                      {t.label}
                    </span>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Architecture callout */}
      <section className="bs-section">
        <div className="bs-section-label">System architecture</div>
        <div className="bs-arch-grid">
          <div className="bs-arch-card">
            <div className="bs-arch-title">Client CSCI</div>
            <p className="bs-arch-desc">React Native (Expo) iOS app. Screens: MapScreen, ListScreen, FavoritesScreen. Components: BarMarker, BarBottomSheet. Hooks: useAuth, useBarsInRadius.</p>
          </div>
          <div className="bs-arch-card">
            <div className="bs-arch-title">Server CSCI</div>
            <p className="bs-arch-desc">Firebase Cloud Functions (Node/TS). Callable endpoints: submitPriceUpdate, approvePriceUpdate, addBar. Admin-only ops protected by role claims.</p>
          </div>
          <div className="bs-arch-card">
            <div className="bs-arch-title">Database CSCI</div>
            <p className="bs-arch-desc">Firestore collections: bars, users (with favorites/submissions subcollections), priceUpdates moderation queue. Geohash-indexed for radius queries.</p>
          </div>
        </div>
        <div className="bs-data-note">
          Bar data schema: <code>name · coords (lat/lng) · geohash · prices (beerBase, shotBase, mixedAvg) · lastVerifiedAt · confidence</code>
        </div>
      </section>

      {/* Dev roadmap */}
      <section className="bs-section">
        <div className="bs-section-label">Development roadmap</div>
        <div className="bs-milestones">
          {milestones.map((m, i) => (
            <div key={m.phase} className="bs-milestone">
              <div className="bs-milestone-connector">
                <div className="bs-milestone-dot" />
                {i < milestones.length - 1 && <div className="bs-milestone-line" />}
              </div>
              <div className="bs-milestone-body">
                <div className="bs-milestone-header">
                  <span className="bs-milestone-phase">{m.phase}</span>
                  <span className="bs-milestone-weeks">{m.weeks}</span>
                  <span className="bs-milestone-label">{m.label}</span>
                </div>
                <div className="bs-milestone-items">
                  {m.items.map((item) => (
                    <span key={item} className="bs-milestone-item">{item}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Design process */}
      <section className="bs-section">
        <div className="bs-section-label">Design process</div>
        <div className="bs-design-list">
          {designInsights.map((d) => (
            <div key={d.label} className="bs-design-row">
              <div className="bs-design-label">{d.label}</div>
              <div className="bs-design-text">{d.text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bs-section bs-cta-section">
        <div className="bs-cta-inner">
          <div>
            <div className="bs-section-label">Try it</div>
            <div className="bs-cta-heading">See BarScout<br />in action.</div>
          </div>
          <div className="bs-cta-links">
            <a
              className="bs-btn-primary"
              href="https://github.com/eliassegura100"
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub ↗
            </a>
            <p className="bs-cta-note">
              Demo available via Expo Go — scan the QR in the repo README.
            </p>
          </div>
        </div>
      </section>
      {/* Lightbox */}
      {lightbox && (
        <div className="bs-lightbox" onClick={() => setLightbox(null)}>
          <button className="bs-lightbox-close" onClick={() => setLightbox(null)}>✕</button>
          <img
            src={lightbox}
            alt="Screenshot"
            className="bs-lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import PageTransition from './components/PageTransition';
import BarScoutPage from './pages/BarScoutPage';
import './styles/globals.css';
import PipethonPage from './pages/PipethonPage';

function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  const isBarScout = location.pathname === '/projects/barscout';
  const isPipethon = location.pathname === '/projects/pipethon';
  const accent = getComputedStyle(document.documentElement)
    .getPropertyValue('--accent')
    .trim();

  const accent3 = getComputedStyle(document.documentElement)
    .getPropertyValue('--accent3-2')
    .trim();

  // Then convert hex to RGB for the canvas
  function hexToRgb(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `${r}, ${g}, ${b}`;
  }


  const particleColor = isBarScout
    ? '157, 89, 239'
    : isPipethon
      ? '0, 229, 160'
      : '0, 134, 229';


  return (
    <>
      <ParticleBackground color={particleColor} />
      <PageTransition>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/barscout" element={<BarScoutPage />} />
          <Route path="/projects/pipethon" element={<PipethonPage />} />
        </Routes>
      </PageTransition>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="root">
        <div style={{ position: 'relative', zIndex: 1 }}>
          <AnimatedRoutes />
        </div>
      </div>
    </BrowserRouter>
  );
}
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import BarScoutPage from './pages/BarScoutPage';
import './styles/globals.css';

function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className ="root">
        <ParticleBackground />
        <div style={{ position: 'relative', zIndex: 1}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/barscout" element={<BarScoutPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

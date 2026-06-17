import { useEffect, useRef } from 'react';
import './ParticleBackground.css';

const PARTICLE_COUNT = 60;
const CONNECTION_DISTANCE = 120;
const SPEED = 0.3;
const TRANSITION_DURATION = 600; // ms

function parseColor(str) {
  return str.split(',').map(Number);
}

function lerpColor(a, b, t) {
  return [
    Math.round(a[0] + (b[0] - a[0]) * t),
    Math.round(a[1] + (b[1] - a[1]) * t),
    Math.round(a[2] + (b[2] - a[2]) * t),
  ];
}

export default function ParticleBackground({ color = '0, 134, 229' }) {
  const canvasRef = useRef(null);
  const colorRef = useRef(parseColor(color));       // current rendered color
  const targetColorRef = useRef(parseColor(color));  // color we're transitioning to
  const transitionStartRef = useRef(null);           // timestamp when transition began
  const fromColorRef = useRef(parseColor(color));    // color we're transitioning from

  // When the color prop changes, kick off a transition
  useEffect(() => {
    const newColor = parseColor(color);
    fromColorRef.current = [...colorRef.current];   // start from wherever we currently are
    targetColorRef.current = newColor;
    transitionStartRef.current = performance.now();
  }, [color]);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initParticles = () => {
      particles = Array.from({ length: PARTICLE_COUNT }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * SPEED,
        vy: (Math.random() - 0.5) * SPEED,
        radius: Math.random() * 1.5 + 0.5,
      }));
    };

    const draw = (timestamp) => {
      // Advance color transition
      if (transitionStartRef.current !== null) {
        const elapsed = timestamp - transitionStartRef.current;
        const t = Math.min(elapsed / TRANSITION_DURATION, 1);
        const eased = t < 0.5
          ? 2 * t * t
          : -1 + (4 - 2 * t) * t; // ease-in-out quad

        colorRef.current = lerpColor(
          fromColorRef.current,
          targetColorRef.current,
          eased
        );

        if (t >= 1) transitionStartRef.current = null;
      }

      const [r, g, b] = colorRef.current;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Draw dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 0.35)`;
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECTION_DISTANCE) {
            const opacity = (1 - dist / CONNECTION_DISTANCE) * 0.12;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };

    resize();
    initParticles();
    animId = requestAnimationFrame(draw);

    const handleResize = () => { resize(); initParticles(); };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="particle-canvas" />
      <div
        className="glow"
        style={{
          background: `radial-gradient(circle, rgba(${color}, 0.25) 0%, transparent 70%)`
        }}
      />
    </>
  );
}
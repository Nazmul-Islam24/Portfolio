import { useEffect, useRef } from 'react';

/**
 * High-performance continuous background animation for the Hero section.
 * Renders subtle floating luminous particles, delicate connecting constellations,
 * and ambient organic wave gradients running smoothly at 60fps.
 */
export default function HeroBackgroundAnimation() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
      initNodes();
    };

    window.addEventListener('resize', handleResize);

    // Subtle particles representing frontend nodes
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      baseAlpha: number;
      phase: number;
    }

    let particles: Particle[] = [];
    const particleCount = Math.min(32, Math.floor((width * height) / 30000));

    const initNodes = () => {
      particles = [];
      const count = Math.min(35, Math.max(16, Math.floor((width * height) / 32000)));
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          radius: Math.random() * 2 + 1.2,
          baseAlpha: Math.random() * 0.35 + 0.15,
          phase: Math.random() * Math.PI * 2,
        });
      }
    };

    initNodes();

    let time = 0;

    const render = () => {
      time += 0.008;
      ctx.clearRect(0, 0, width, height);

      // 1. Organic Ambient Glow Orbs
      const orb1X = width * 0.25 + Math.sin(time * 0.7) * 40;
      const orb1Y = height * 0.35 + Math.cos(time * 0.5) * 35;
      const rad1 = ctx.createRadialGradient(orb1X, orb1Y, 10, orb1X, orb1Y, Math.min(width, height) * 0.5);
      rad1.addColorStop(0, 'rgba(184, 138, 90, 0.09)');
      rad1.addColorStop(0.5, 'rgba(184, 138, 90, 0.03)');
      rad1.addColorStop(1, 'rgba(245, 243, 239, 0)');
      ctx.fillStyle = rad1;
      ctx.fillRect(0, 0, width, height);

      const orb2X = width * 0.8 + Math.cos(time * 0.6) * 50;
      const orb2Y = height * 0.6 + Math.sin(time * 0.8) * 45;
      const rad2 = ctx.createRadialGradient(orb2X, orb2Y, 15, orb2X, orb2Y, Math.min(width, height) * 0.45);
      rad2.addColorStop(0, 'rgba(184, 138, 90, 0.07)');
      rad2.addColorStop(0.6, 'rgba(184, 138, 90, 0.02)');
      rad2.addColorStop(1, 'rgba(245, 243, 239, 0)');
      ctx.fillStyle = rad2;
      ctx.fillRect(0, 0, width, height);

      // 2. Subtle geometric grid lines (faint architectural guide lines)
      ctx.strokeStyle = 'rgba(217, 214, 208, 0.22)';
      ctx.lineWidth = 1;

      // Draw faint horizontal guideline
      const gridOffset = (time * 12) % 60;
      for (let y = gridOffset; y < height; y += 60) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw faint vertical guideline
      for (let x = 0; x < width; x += 120) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // 3. Connect close particles with delicate filaments
      const maxDistance = 140;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.16;
            ctx.strokeStyle = `rgba(184, 138, 90, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // 4. Update and Draw Particles
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around boundaries smoothly
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        const pulse = Math.sin(time * 2 + p.phase) * 0.15;
        const currentAlpha = Math.max(0.08, Math.min(0.65, p.baseAlpha + pulse));

        ctx.fillStyle = `rgba(184, 138, 90, ${currentAlpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      <canvas
        ref={canvasRef}
        className="w-full h-full block opacity-90 transition-opacity duration-1000"
      />
      {/* Soft gradient edge fade into the rest of the page */}
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#F5F3EF] to-transparent pointer-events-none" />
    </div>
  );
}

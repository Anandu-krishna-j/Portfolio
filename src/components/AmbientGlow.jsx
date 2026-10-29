import React, { useEffect, useRef } from 'react';

/**
 * AmbientGlow: Modern, aesthetic ambient atmospheric gradient mesh.
 * Replaces harsh matrix grids with soft, undulating liquid light orbs.
 * 
 * - Ultra smooth, 60fps performance
 * - Pauses when tab is inactive or user prefers reduced motion
 */
const AmbientGlow = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Ethereal light orbs with soft, radiant colors
    const orbs = [
      {
        x: width * 0.2,
        y: height * 0.25,
        radius: Math.min(width, height) * 0.45,
        color: 'rgba(99, 102, 241, 0.12)', // Electric Indigo
        vx: 0.25,
        vy: 0.18,
        angle: 0
      },
      {
        x: width * 0.8,
        y: height * 0.4,
        radius: Math.min(width, height) * 0.5,
        color: 'rgba(56, 189, 248, 0.10)', // Soft Cyan
        vx: -0.22,
        vy: 0.24,
        angle: Math.PI / 2
      },
      {
        x: width * 0.5,
        y: height * 0.8,
        radius: Math.min(width, height) * 0.55,
        color: 'rgba(168, 85, 247, 0.09)', // Velvet Purple
        vx: 0.18,
        vy: -0.2,
        angle: Math.PI
      }
    ];

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle noise or soft ambient fill
      orbs.forEach((orb) => {
        if (!prefersReducedMotion) {
          orb.angle += 0.003;
          orb.x += Math.cos(orb.angle) * 0.6;
          orb.y += Math.sin(orb.angle) * 0.6;
        }

        const gradient = ctx.createRadialGradient(
          orb.x,
          orb.y,
          0,
          orb.x,
          orb.y,
          orb.radius
        );

        gradient.addColorStop(0, orb.color);
        gradient.addColorStop(1, 'rgba(9, 10, 15, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return <canvas ref={canvasRef} className="ambient-glow-canvas" aria-hidden="true" />;
};

export default AmbientGlow;


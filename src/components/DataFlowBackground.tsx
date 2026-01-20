import { useEffect, useRef } from 'react';

const DataFlowBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    const connections: Array<{
      from: number;
      to: number;
      progress: number;
      speed: number;
    }> = [];

    // Create particles (nodes)
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    // Create some random connections
    for (let i = 0; i < 20; i++) {
      connections.push({
        from: Math.floor(Math.random() * particles.length),
        to: Math.floor(Math.random() * particles.length),
        progress: Math.random(),
        speed: Math.random() * 0.005 + 0.002,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99, 135, 255, ${p.opacity})`;
        ctx.fill();
      });

      // Draw connections with flowing effect
      connections.forEach((conn) => {
        const from = particles[conn.from];
        const to = particles[conn.to];
        const dist = Math.sqrt((to.x - from.x) ** 2 + (to.y - from.y) ** 2);

        if (dist < 300) {
          // Draw base line
          ctx.beginPath();
          ctx.moveTo(from.x, from.y);
          ctx.lineTo(to.x, to.y);
          ctx.strokeStyle = `rgba(99, 135, 255, ${0.1 * (1 - dist / 300)})`;
          ctx.lineWidth = 1;
          ctx.stroke();

          // Draw flowing dot
          conn.progress += conn.speed;
          if (conn.progress > 1) conn.progress = 0;

          const dotX = from.x + (to.x - from.x) * conn.progress;
          const dotY = from.y + (to.y - from.y) * conn.progress;

          ctx.beginPath();
          ctx.arc(dotX, dotY, 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(99, 135, 255, ${0.6 * (1 - dist / 300)})`;
          ctx.fill();
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-60"
      style={{ zIndex: 0 }}
    />
  );
};

export default DataFlowBackground;

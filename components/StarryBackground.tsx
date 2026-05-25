"use client";

import { useEffect, useRef, useState } from "react";

export function StarryBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Dark Mode: Canvas Stars */}
      <div className="hidden dark:block">
        <CanvasStars />
      </div>
    </>
  );
}

function CanvasStars() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let stars: { x: number; y: number; z: number; radius: number; speed: number; opacity: number; pulseSpeed: number }[] = [];
    let shootingStars: { x: number; y: number; length: number; speed: number; opacity: number; dx: number; dy: number }[] = [];
    
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;
    let animationFrameId: number;

    const resize = () => {
      // Fix for High-DPI (Retina) displays to prevent blurriness
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
      
      initStars();
    };

    const initStars = () => {
      stars = [];
      const numStars = Math.floor((window.innerWidth * window.innerHeight) / 4000); 
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          z: Math.random() * 2 + 0.2, // Depth for parallax (0.2 to 2.2)
          radius: Math.random() * 1.5 + 0.5,
          speed: Math.random() * 0.15 + 0.05,
          opacity: Math.random(),
          pulseSpeed: Math.random() * 0.02 + 0.005,
        });
      }
    };

    const spawnShootingStar = () => {
      shootingStars.push({
        x: Math.random() * window.innerWidth * 1.5, // Start from further right
        y: Math.random() * -200, // Start above the screen
        length: Math.random() * 100 + 50,
        speed: Math.random() * 15 + 10,
        opacity: 1,
        dx: -1, // moves left
        dy: 1,  // moves down
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX - window.innerWidth / 2) * 0.08;
      targetMouseY = (e.clientY - window.innerHeight / 2) * 0.08;
    };

    let isVisible = true;
    const observer = new IntersectionObserver((entries) => {
      isVisible = entries[0].isIntersecting;
    });
    observer.observe(canvas);

    const draw = () => {
      animationFrameId = requestAnimationFrame(draw);
      
      // SUPER PERFORMANCE OPTIMIZATION:
      // If the canvas is hidden (e.g., in Light Mode), skip all calculations and drawing!
      if (!isVisible) return;

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      
      currentMouseX += (targetMouseX - currentMouseX) * 0.05;
      currentMouseY += (targetMouseY - currentMouseY) * 0.05;

      // Draw normal stars
      stars.forEach((star) => {
        star.x -= star.speed;
        star.y -= star.speed * 0.8;

        star.opacity += star.pulseSpeed;
        if (star.opacity > 1 || star.opacity < 0.2) {
          star.pulseSpeed *= -1;
        }

        if (star.x < 0) star.x = window.innerWidth;
        if (star.y < 0) star.y = window.innerHeight;
        if (star.x > window.innerWidth) star.x = 0;
        if (star.y > window.innerHeight) star.y = 0;

        const parallaxX = currentMouseX / star.z;
        const parallaxY = currentMouseY / star.z;

        let drawX = star.x + parallaxX;
        let drawY = star.y + parallaxY;

        if (drawX < 0) drawX += window.innerWidth;
        if (drawX > window.innerWidth) drawX -= window.innerWidth;
        if (drawY < 0) drawY += window.innerHeight;
        if (drawY > window.innerHeight) drawY -= window.innerHeight;

        ctx.beginPath();
        ctx.arc(drawX, drawY, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180, 220, 255, ${star.opacity})`;
        ctx.fill();
      });

      // Spawn shooting stars randomly
      if (Math.random() < 0.005) { // 0.5% chance per frame (about 1 every 3 seconds)
        spawnShootingStar();
      }

      // Draw shooting stars
      shootingStars.forEach((star, index) => {
        star.x += star.dx * star.speed;
        star.y += star.dy * star.speed;
        star.opacity -= 0.015;

        if (star.opacity <= 0 || star.y > window.innerHeight || star.x < 0) {
          shootingStars.splice(index, 1);
          return;
        }

        const tailX = star.x - (star.dx * star.length);
        const tailY = star.y - (star.dy * star.length);

        const gradient = ctx.createLinearGradient(star.x, star.y, tailX, tailY);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`);
        gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);

        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(tailX, tailY);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      });
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);

    resize();
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[-1] pointer-events-none"
      style={{ background: "transparent" }}
    />
  );
}

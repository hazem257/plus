import React, { useRef, useEffect } from "react";

const MathOrbitBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const dpr = window.devicePixelRatio || 1;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // رموز ومعادلات رياضية
    const symbols = [
      "∑", "√", "∫", "π", "Δ", "∞", "θ", "≈", "log", "sin", "cos", "tan"
    ];
    const colors = ["#3399ff", "#33cc99", "#aa66ff", "#ff9933"];

    const circles = Array.from({ length: 25 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: Math.random() * 35 + 15,
      angle: Math.random() * Math.PI * 2,
      orbitSpeed: (Math.random() - 0.5) * 0.02,
      symbol: symbols[Math.floor(Math.random() * symbols.length)],
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    // تغيير الرموز كل 2 ثانية
    const changeSymbols = setInterval(() => {
      circles.forEach((c) => {
        c.symbol = symbols[Math.floor(Math.random() * symbols.length)];
      });
    }, 2000);

    const animate = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      circles.forEach((c) => {
        c.x += c.vx;
        c.y += c.vy;

        if (c.x < 0 || c.x > window.innerWidth) c.vx *= -1;
        if (c.y < 0 || c.y > window.innerHeight) c.vy *= -1;

        c.angle += c.orbitSpeed;
        const offsetX = Math.cos(c.angle) * 20;
        const offsetY = Math.sin(c.angle) * 20;

        const drawX = c.x + offsetX;
        const drawY = c.y + offsetY;

        // دوائر شفافة
        ctx.beginPath();
        ctx.arc(drawX, drawY, c.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${c.color}22`;
        ctx.fill();

        // الرمز الرياضي
        ctx.fillStyle = c.color;
        ctx.font = `${c.radius / 1.5}px serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(c.symbol, drawX, drawY);
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      clearInterval(changeSymbols);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -10,
        pointerEvents: "none",
      }}
    />
  );
};

export default MathOrbitBackground;

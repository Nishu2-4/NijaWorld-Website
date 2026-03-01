import React, { useEffect, useRef, useState } from 'react';

export function InteractiveDotGrid() {
    const canvasRef = useRef(null);
    const dotsRef = useRef([]);
    const mouseRef = useRef({ x: -1000, y: -1000 });
    const animationFrameRef = useRef(null);
    const isMobileRef = useRef(false);
    const timeRef = useRef(0);
    const [isDark, setIsDark] = useState(true);

    // Theme detection effect
    useEffect(() => {
        const checkTheme = () => {
            setIsDark(document.documentElement.classList.contains('dark'));
        };

        checkTheme();

        const observer = new MutationObserver(checkTheme);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class']
        });

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d', { alpha: true });
        isMobileRef.current = window.innerWidth < 768;

        // Setup canvas size
        const resizeCanvas = () => {
            const dpr = window.devicePixelRatio || 1;
            const rect = canvas.getBoundingClientRect();
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            ctx.scale(dpr, dpr);
            canvas.style.width = rect.width + 'px';
            canvas.style.height = rect.height + 'px';
            initDots();
        };

        // Initialize dot grid
        const initDots = () => {
            const dots = [];
            const spacing = isMobileRef.current ? 40 : 30;
            const rows = Math.ceil(canvas.height / (window.devicePixelRatio || 1) / spacing);
            const cols = Math.ceil(canvas.width / (window.devicePixelRatio || 1) / spacing);

            for (let i = 0; i < rows; i++) {
                for (let j = 0; j < cols; j++) {
                    const x = j * spacing + spacing / 2;
                    const y = i * spacing + spacing / 2;

                    // Alternate between purple and green
                    const isPurple = (i + j) % 2 === 0;

                    dots.push({
                        originalX: x,
                        originalY: y,
                        x: x,
                        y: y,
                        vx: 0,
                        vy: 0,
                        color: isPurple ? '#6B4EFF' : '#2DBE7B',
                        opacity: 0.25,
                        radius: 1.5
                    });
                }
            }
            dotsRef.current = dots;
        };

        // Mouse move handler
        const handleMouseMove = (e) => {
            if (isMobileRef.current) return;
            const rect = canvas.getBoundingClientRect();
            mouseRef.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            };
        };

        const handleMouseLeave = () => {
            mouseRef.current = { x: -1000, y: -1000 };
        };

        // Animation loop
        const animate = () => {
            const rect = canvas.getBoundingClientRect();
            ctx.clearRect(0, 0, rect.width, rect.height);

            timeRef.current += 0.01;

            dotsRef.current.forEach((dot) => {
                let targetX = dot.originalX;
                let targetY = dot.originalY;

                if (isMobileRef.current) {
                    // Ambient wave motion for mobile
                    const waveX = Math.sin(timeRef.current + dot.originalY * 0.01) * 3;
                    const waveY = Math.cos(timeRef.current + dot.originalX * 0.01) * 3;
                    targetX += waveX;
                    targetY += waveY;
                } else {
                    // Cursor repulsion and glow
                    const dx = dot.x - mouseRef.current.x;
                    const dy = dot.y - mouseRef.current.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    const maxDistance = 120;

                    if (distance < maxDistance) {
                        const force = (maxDistance - distance) / maxDistance;
                        const angle = Math.atan2(dy, dx);

                        // Reduced repulsion strength
                        const repelStrength = 15 * force * Math.sin(force * Math.PI);

                        targetX = dot.originalX + Math.cos(angle) * repelStrength;
                        targetY = dot.originalY + Math.sin(angle) * repelStrength;
                    }
                }

                // Smooth physics-based return
                const spring = 0.15;
                const friction = 0.85;

                dot.vx += (targetX - dot.x) * spring;
                dot.vy += (targetY - dot.y) * spring;

                dot.vx *= friction;
                dot.vy *= friction;

                dot.x += dot.vx;
                dot.y += dot.vy;

                // Calculate glow effect based on cursor proximity
                let currentOpacity = dot.opacity;
                let currentRadius = dot.radius;

                if (!isMobileRef.current) {
                    const dx = dot.x - mouseRef.current.x;
                    const dy = dot.y - mouseRef.current.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    const glowDistance = 100;

                    if (distance < glowDistance) {
                        const glowIntensity = 1 - (distance / glowDistance);
                        currentOpacity = 0.25 + (glowIntensity * 0.55); // up to 0.8
                        currentRadius = 1.5 + (glowIntensity * 2); // up to 3.5px
                    }
                }

                // Draw dot with glow
                ctx.beginPath();
                ctx.arc(dot.x, dot.y, currentRadius, 0, Math.PI * 2);
                ctx.fillStyle = dot.color;
                ctx.globalAlpha = currentOpacity;
                ctx.fill();
                ctx.globalAlpha = 1;
            });

            animationFrameRef.current = requestAnimationFrame(animate);
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseleave', handleMouseLeave);

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            canvas.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('mouseleave', handleMouseLeave);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
            style={{
                background: isDark
                    ? 'radial-gradient(ellipse at center, #0d1117 0%, #020409 100%)'
                    : 'radial-gradient(ellipse at center, #ffffff 0%, #f8fafc 100%)',
            }}
        />
    );
}

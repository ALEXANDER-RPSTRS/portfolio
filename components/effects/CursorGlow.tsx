'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

export function CursorGlow() {
  const [enabled, setEnabled] = useState(false);
  const [hoverState, setHoverState] = useState<'default' | 'pointer' | 'text' | 'project'>('default');
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Coordenadas base de movimiento
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  // Capa 2: Aro interactivo (Resorte medio, lag elástico muy orgánico)
  const ringX = useSpring(mouseX, { damping: 30, stiffness: 200, mass: 0.6 });
  const ringY = useSpring(mouseY, { damping: 30, stiffness: 200, mass: 0.6 });

  // Capa 3: Brillo de fondo ambiental (Resorte lento para sensación de estela flotante)
  const glowX = useSpring(mouseX, { damping: 40, stiffness: 100, mass: 1 });
  const glowY = useSpring(mouseY, { damping: 40, stiffness: 100, mass: 1 });

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;

    if (prefersReducedMotion || isTouchDevice) return;

    setEnabled(true);
    document.body.classList.add('has-custom-cursor');

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Detectar si estamos sobre una tarjeta de proyecto
      if (
        target.closest('[data-cursor="project"]') ||
        target.closest('#projects .rounded-3xl') ||
        target.closest('#projects [data-cursor-hover]')
      ) {
        setHoverState('project');
        return;
      }

      // Detectar entradas de texto
      if (target.closest('input, textarea, [contenteditable="true"]')) {
        setHoverState('text');
        return;
      }

      // Detectar elementos interactivos ordinarios (enlaces, botones, etc.)
      if (target.closest('a, button, [role="button"], [data-cursor-hover], label, select')) {
        setHoverState('pointer');
        return;
      }

      setHoverState('default');
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', moveCursor, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.body.classList.remove('has-custom-cursor');
    };
  }, [mouseX, mouseY]);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      {/* 1. Capa 3: Brillo ambiental degradado (estela lenta) */}
      <motion.div
        style={{
          x: glowX,
          y: glowY,
          translateX: '-50%',
          translateY: '-50%',
          background: 'radial-gradient(circle, rgba(96,165,250,0.12) 0%, rgba(139,92,246,0.06) 40%, transparent 70%)',
          filter: 'blur(8px)',
        }}
        animate={{
          width: hoverState === 'pointer' ? 420 : hoverState === 'project' ? 480 : hoverState === 'text' ? 180 : 320,
          height: hoverState === 'pointer' ? 420 : hoverState === 'project' ? 480 : hoverState === 'text' ? 180 : 320,
          opacity: isVisible ? (hoverState === 'pointer' || hoverState === 'project' ? 0.9 : 0.6) : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 80,
          damping: 25,
        }}
        className="fixed left-0 top-0 will-change-transform"
      />

      {/* 2. Capa 2: Aro interactivo elástico */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: hoverState === 'pointer' ? 64 : hoverState === 'project' ? 88 : hoverState === 'text' ? 0 : 32,
          height: hoverState === 'pointer' ? 64 : hoverState === 'project' ? 88 : hoverState === 'text' ? 0 : 32,
          borderColor:
            hoverState === 'pointer'
              ? 'rgba(139, 92, 246, 0.8)' // Púrpura en enlaces
              : hoverState === 'project'
              ? 'rgba(96, 165, 250, 0.7)' // Azul en proyectos
              : 'rgba(96, 165, 250, 0.35)', // Azul tenue base
          backgroundColor:
            hoverState === 'pointer'
              ? 'rgba(139, 92, 246, 0.08)'
              : hoverState === 'project'
              ? 'rgba(96, 165, 250, 0.08)'
              : 'rgba(96, 165, 250, 0.02)',
          scale: isClicked ? 0.85 : 1,
          opacity: isVisible && hoverState !== 'text' ? 1 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 30,
          mass: 0.2,
        }}
        className="fixed left-0 top-0 border border-solid flex items-center justify-center will-change-transform shadow-[0_0_15px_rgba(96,165,250,0.05)] rounded-full"
      >
        {/* Texto interno exclusivo para proyectos */}
        <AnimatePresence>
          {hoverState === 'project' && (
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.15 }}
              className="text-[10px] font-bold tracking-[0.2em] text-blue-300 pointer-events-none select-none uppercase font-sans"
            >
              Ver
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>

      {/* 3. Capa 1: Cursor de flecha de Windows personalizado y dinámico */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: hoverState === 'text' ? '-50%' : '-4px',
          translateY: hoverState === 'text' ? '-50%' : '-3px',
        }}
        animate={{
          rotate: hoverState === 'pointer' ? 12 : hoverState === 'project' ? -15 : 0,
          scale: isClicked ? 0.85 : hoverState === 'pointer' ? 1.1 : hoverState === 'project' ? 1.15 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
        }}
        className="fixed left-0 top-0 will-change-transform"
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[0_2px_8px_rgba(59,130,246,0.35)]"
        >
          <defs>
            {/* Degradado por defecto (Azul a Púrpura) */}
            <linearGradient id="cursor-grad-default" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
            {/* Degradado sobre enlaces (Púrpura a Rosa) */}
            <linearGradient id="cursor-grad-pointer" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
            {/* Degradado sobre proyectos (Azul a Cian) */}
            <linearGradient id="cursor-grad-project" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>

          {hoverState === 'text' ? (
            // Icono de I-Beam para selección de texto
            <path
              d="M8,4 H16 M12,4 V20 M8,20 H16"
              stroke="url(#cursor-grad-default)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ) : (
            // Flecha clásica de Windows estilizada con degradados
            <path
              d="M4,3 L4,20 L9.5,14.5 L13.5,22 L16,20.5 L12,13 L17.5,13 Z"
              fill={
                hoverState === 'pointer'
                  ? 'url(#cursor-grad-pointer)'
                  : hoverState === 'project'
                  ? 'url(#cursor-grad-project)'
                  : 'url(#cursor-grad-default)'
              }
              stroke="#ffffff"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          )}
        </svg>
      </motion.div>
    </div>
  );
}


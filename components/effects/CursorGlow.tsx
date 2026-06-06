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

  // Capa 1: Núcleo de diamante de alta visibilidad (Muy rápido y preciso)
  const dotX = useSpring(mouseX, { damping: 45, stiffness: 750, mass: 0.15 });
  const dotY = useSpring(mouseY, { damping: 45, stiffness: 750, mass: 0.15 });

  // Capa 2: Aro de diamante elástico (Resorte medio, lag elástico muy orgánico)
  const ringX = useSpring(mouseX, { damping: 28, stiffness: 180, mass: 0.6 });
  const ringY = useSpring(mouseY, { damping: 28, stiffness: 180, mass: 0.6 });

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
      {/* 1. Brillo ambiental degradado de fondo (Estela suave de color) */}
      <motion.div
        style={{
          x: glowX,
          y: glowY,
          translateX: '-50%',
          translateY: '-50%',
          background: 'radial-gradient(circle, rgba(96,165,250,0.12) 0%, rgba(139,92,246,0.06) 45%, transparent 70%)',
          filter: 'blur(12px)',
        }}
        animate={{
          width: hoverState === 'pointer' ? 380 : hoverState === 'project' ? 440 : hoverState === 'text' ? 120 : 280,
          height: hoverState === 'pointer' ? 380 : hoverState === 'project' ? 440 : hoverState === 'text' ? 120 : 280,
          opacity: isVisible ? (hoverState === 'pointer' || hoverState === 'project' ? 0.9 : 0.6) : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 80,
          damping: 25,
        }}
        className="fixed left-0 top-0 will-change-transform"
      />

      {/* 2. Diamante elástico de seguimiento (Contraste alto) */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: hoverState === 'pointer' ? 52 : hoverState === 'project' ? 72 : hoverState === 'text' ? 12 : 28,
          height: hoverState === 'pointer' ? 52 : hoverState === 'project' ? 72 : hoverState === 'text' ? 12 : 28,
          rotate: hoverState === 'pointer' ? 135 : hoverState === 'project' ? 225 : hoverState === 'text' ? 90 : 45,
          borderColor:
            hoverState === 'pointer'
              ? '#a855f7' // Púrpura más brillante en enlaces
              : hoverState === 'project'
              ? '#3b82f6' // Azul más brillante en proyectos
              : 'rgba(96, 165, 250, 0.65)', // Azul base contrastante
          backgroundColor:
            hoverState === 'pointer'
              ? 'rgba(168, 85, 247, 0.16)'
              : hoverState === 'project'
              ? 'rgba(59, 130, 246, 0.16)'
              : 'rgba(96, 165, 250, 0.05)',
          borderRadius: hoverState === 'text' ? '1px' : '4px',
          scale: isClicked ? 0.8 : 1,
          opacity: isVisible ? (hoverState === 'text' ? 0.3 : 1) : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 350,
          damping: 28,
          mass: 0.3,
        }}
        className="fixed left-0 top-0 border-[2px] border-solid will-change-transform flex items-center justify-center shadow-[0_0_15px_rgba(96,165,250,0.2)]"
      >
        {/* Sub-elemento decorativo interno para proyectos */}
        <AnimatePresence>
          {hoverState === 'project' && (
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: 0 }}
              animate={{ opacity: 1, scale: 1, rotate: 90 }}
              exit={{ opacity: 0, scale: 0, rotate: 0 }}
              transition={{ duration: 0.25 }}
              className="w-4 h-4 border-[1.5px] border-blue-400 bg-blue-500/20 rounded-[2px]"
            />
          )}
        </AnimatePresence>
      </motion.div>

      {/* 3. Núcleo central de diamante de alta visibilidad (Sólido y con brillo blanco) */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: hoverState === 'text' ? 0 : hoverState === 'pointer' ? 6 : hoverState === 'project' ? 6 : 8,
          height: hoverState === 'text' ? 0 : hoverState === 'pointer' ? 6 : hoverState === 'project' ? 6 : 8,
          rotate: 45,
          scale: isClicked ? 1.4 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 550,
          damping: 30,
        }}
        className="fixed left-0 top-0 rounded-[1.5px] bg-white shadow-[0_0_12px_rgba(255,255,255,0.95),0_0_4px_rgba(96,165,250,0.8)] will-change-transform"
      />
    </div>
  );
}

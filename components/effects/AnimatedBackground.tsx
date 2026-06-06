'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export function AnimatedBackground() {
  const { scrollYProgress } = useScroll();

  // Rotación y escalado dinámico del HUD de ingeniería en función del scroll
  const rotateTech = useTransform(scrollYProgress, [0, 1], [0, 240]);
  const scaleTech = useTransform(scrollYProgress, [0, 1], [0.85, 1.45]);
  const opacitySchematic = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.15, 0.28, 0.15, 0.04]);

  // Movimiento del plano 3D en base al scroll
  const gridY = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const opacityGrid = useTransform(scrollYProgress, [0, 0.5, 1], [0.18, 0.32, 0.15]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#020203]"
    >
      {/* 1. Fondo base y resplandores degradados sobrios (Azul oscuro / Violeta profundo) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_140%_90%_at_50%_-20%,rgba(20,50,150,0.1),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#020203_85%)]" />

      {/* Orbs de color sobrio con animación oscilante y scroll */}
      <div className="orb orb-1 absolute -left-[10%] top-[10%] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(30,58,138,0.12)_0%,transparent_70%)] blur-[90px]" />
      <div className="orb orb-2 absolute -right-[8%] top-[30%] h-[550px] w-[550px] rounded-full bg-[radial-gradient(circle,rgba(76,29,149,0.1)_0%,transparent_70%)] blur-[100px]" />
      <div className="orb orb-3 absolute bottom-[10%] left-[20%] h-[450px] w-[450px] rounded-full bg-[radial-gradient(circle,rgba(30,58,138,0.08)_0%,transparent_70%)] blur-[80px]" />

      {/* 2. Plano de Rejilla 3D de Perspectiva que rueda con el scroll */}
      <motion.div
        style={{
          y: gridY,
          opacity: opacityGrid,
          backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          transform: 'perspective(600px) rotateX(65deg) translateY(-80px)',
          transformOrigin: 'top center',
        }}
        className="absolute inset-0 pointer-events-none will-change-transform"
      />

      {/* 3. Animación gigante de plano técnico/HUD en el fondo */}
      <motion.div
        style={{
          rotate: rotateTech,
          scale: scaleTech,
          opacity: opacitySchematic,
        }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none text-blue-500/15 will-change-transform"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full opacity-80" xmlns="http://www.w3.org/2000/svg">
          {/* Círculo exterior con grados */}
          <circle cx="100" cy="100" r="95" stroke="currentColor" strokeWidth="0.3" strokeDasharray="1 3" fill="none" />
          {/* Círculos concéntricos principales */}
          <circle cx="100" cy="100" r="82" stroke="currentColor" strokeWidth="0.6" strokeDasharray="30 10 15 10 5 10" fill="none" />
          <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="0.2" fill="none" />
          <circle cx="100" cy="100" r="55" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" fill="none" />
          <circle cx="100" cy="100" r="38" stroke="currentColor" strokeWidth="0.3" fill="none" />
          <circle cx="100" cy="100" r="20" stroke="currentColor" strokeWidth="0.5" strokeDasharray="40 10" fill="none" />

          {/* Ejes y marcas en forma de cruz */}
          <line x1="5" y1="100" x2="195" y2="100" stroke="currentColor" strokeWidth="0.25" />
          <line x1="100" y1="5" x2="100" y2="195" stroke="currentColor" strokeWidth="0.25" />

          {/* Líneas angulares decorativas */}
          <line x1="29.29" y1="29.29" x2="170.71" y2="170.71" stroke="currentColor" strokeWidth="0.15" strokeDasharray="6 3" />
          <line x1="170.71" y1="29.29" x2="29.29" y2="170.71" stroke="currentColor" strokeWidth="0.15" strokeDasharray="6 3" />

          {/* Retículas y marcas de porcentaje */}
          <path d="M100 12 L103 12 M100 22 L105 22 M100 32 L103 32" stroke="currentColor" strokeWidth="0.4" />
          <path d="M12 100 L12 103 M22 100 L22 105 M32 100 L32 103" stroke="currentColor" strokeWidth="0.4" />

          {/* Caja central */}
          <rect x="94" y="94" width="12" height="12" stroke="currentColor" strokeWidth="0.3" fill="none" strokeDasharray="2 1" />
        </svg>
      </motion.div>

      {/* Halo extra de contraste oscuro superior e inferior */}
      <div className="absolute inset-x-0 top-0 h-[20%] bg-gradient-to-b from-[#020203] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-[20%] bg-gradient-to-t from-[#020203] to-transparent" />
    </div>
  );
}

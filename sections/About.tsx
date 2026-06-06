'use client';

import { Card, Section } from '@/components/common';
import { motion } from 'framer-motion';

export function About() {
  const highlights = [
    {
      title: 'Full-Stack Developer',
      description: 'Experiencia completa en frontend moderno y backend robusto',
      icon: '💻',
    },
    {
      title: 'Experiencia en Portales',
      description: 'Rediseño de portal para 80,000+ usuarios diarios',
      icon: '🎯',
    },
    {
      title: 'UI/UX Designer',
      description: 'Experiencia en investigación, prototipado y validación con usuarios',
      icon: '🎨',
    },
    {
      title: 'Arquitectura Escalable',
      description: 'Diseño de sistemas robustos y mantenibles',
      icon: '🏗️',
    },
  ];

  return (
    <Section id="about">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20 md:mb-24"
      >
        <p className="text-blue-400 uppercase tracking-[0.35em] text-xs md:text-sm font-semibold mb-4">
          Sobre mí
        </p>
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
          Diseño y desarrollo
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            experiencias digitales
          </span>
        </h2>
        <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
          Ingeniero de Software con experiencia en desarrollo web, diseño UX/UI y soluciones tecnológicas modernas.
          Me enfoco en construir interfaces limpias, rápidas, escalables y accesibles.
        </p>
      </motion.div>

      {/* Highlights Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
      >
        {highlights.map((highlight, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <Card interactive elevated className="p-6 h-full">
              <div className="text-4xl mb-4">{highlight.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">
                {highlight.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {highlight.description}
              </p>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

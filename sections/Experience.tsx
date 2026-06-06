/**
 * Experience Section
 * Muestra timeline de experiencia laboral de forma elegante
 * 
 * Características:
 * - Timeline vertical responsive
 * - Cards con glassmorphism
 * - Animaciones suaves con Framer Motion
 * - Info detallada y tecnologías usadas
 */

'use client';

import { Card, Section } from '@/components/common';
import { EXPERIENCE } from '@/data/constants';
import { motion } from 'framer-motion';

export function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Section id="experience" className="relative">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          Experiencia
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mb-4" />
        <p className="text-gray-400 text-lg max-w-2xl">
          Mi trayecto profesional en desarrollo de software y diseño UX/UI
        </p>
      </motion.div>

      {/* Timeline */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative space-y-8"
      >
        {/* Línea vertical (desktop only) */}
        <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-indigo-500/30 to-transparent" />

        {EXPERIENCE.map((exp) => (
          <motion.div
            key={exp.id}
            variants={itemVariants}
            className="relative md:pl-24"
          >
            {/* Dot en timeline (desktop only) */}
            <div className="hidden md:block absolute left-0 top-8 w-16 h-16 flex items-center justify-center">
              <div className="absolute w-full h-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full blur" />
              <div className="relative w-8 h-8 bg-blue-600 rounded-full border-2 border-blue-400 flex items-center justify-center">
                <span className="w-3 h-3 bg-white rounded-full" />
              </div>
            </div>

            {/* Card */}
            <Card interactive elevated className="p-6 md:p-8 hover:shadow-xl hover:shadow-blue-600/20">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {exp.position}
                  </h3>
                  <p className="text-blue-400 font-semibold">
                    {exp.company}
                  </p>
                </div>
                <span className="text-sm text-gray-500 whitespace-nowrap">
                  {exp.duration}
                </span>
              </div>

              <p className="text-gray-400 mb-6 leading-relaxed">
                {exp.description}
              </p>

              {/* Achievements */}
              {exp.achievements && (
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white/80 mb-3 uppercase tracking-wide">
                    Logros
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-gray-400 flex items-start gap-3"
                      >
                        <span className="text-blue-400 font-bold mt-1">✓</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies */}
              {exp.technologies && (
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-blue-600/20 text-blue-300 border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

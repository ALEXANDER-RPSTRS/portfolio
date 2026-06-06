/**
 * Skills Section
 * Muestra habilidades técnicas y profesionales de forma visual
 */

'use client';

import { Card, Section } from '@/components/common';
import { SKILLS } from '@/data/constants';
import { motion } from 'framer-motion';

export function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <Section className="relative">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          Skills & Tecnologías
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mx-auto mb-4" />
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Stack tecnológico que domino y herramientas que utilizo diariamente
        </p>
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {Object.values(SKILLS).map((category) => (
          <motion.div key={category.category} variants={itemVariants}>
            <Card elevated interactive className="p-8 h-full">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-500">
                  {category.category === 'Frontend' && '⚛️'}
                  {category.category === 'Backend & Databases' && '⚙️'}
                  {category.category === 'Design & UX' && '🎨'}
                  {category.category === 'Herramientas & Metodologías' && '🛠️'}
                </span>
                {category.category}
              </h3>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-wrap gap-3"
              >
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    variants={skillVariants}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all cursor-default text-sm font-medium text-gray-300 hover:text-white"
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-16 text-center"
      >
        <Card elevated className="p-8 inline-block max-w-2xl">
          <h4 className="text-lg font-bold text-white mb-3">
            Full-Stack Specialist
          </h4>
          <p className="text-gray-400">
            Experiencia completa en desarrollo frontend moderno con React/Next.js, backend robusto con C#/.NET y Python, bases de datos SQL y NoSQL, y diseño UX/UI enfocado en experiencias premium.
          </p>
        </Card>
      </motion.div>
    </Section>
  );
}

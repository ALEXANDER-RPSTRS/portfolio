/**
 * Education Section
 * Muestra educación y certificaciones
 */

'use client';

import { Card, Section } from '@/components/common';
import { CERTIFICATIONS, EDUCATION } from '@/data/constants';
import { motion } from 'framer-motion';

export function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <Section id="education" className="relative">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          Educación & Certificaciones
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
      </motion.div>

      {/* Education */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-16"
      >
        <h3 className="text-2xl font-bold text-white mb-8">Formación Académica</h3>
        <div className="grid gap-6">
          {EDUCATION.map((edu) => (
            <motion.div key={edu.id} variants={itemVariants}>
              <Card interactive elevated className="p-6 md:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-cyan-400 font-medium">
                      {edu.institution}
                    </p>
                  </div>
                  <span className="text-sm text-gray-500">
                    {edu.status}
                  </span>
                </div>

                {edu.highlights && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {edu.highlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="text-sm text-gray-400 flex items-center gap-2"
                      >
                        <span className="text-cyan-400">→</span>
                        {highlight}
                      </div>
                    ))}
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Certifications */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold text-white mb-8">Certificaciones</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <motion.div key={cert.id} variants={itemVariants}>
              <Card interactive className="p-6 text-center">
                <div className="text-4xl mb-4">
                  {cert.id === 'toefl' ? '🌐' : '🏆'}
                </div>
                <h4 className="text-lg font-bold text-white mb-2">
                  {cert.name}
                </h4>
                <p className="text-gray-400 text-sm mb-2">
                  {cert.issuer}
                </p>
                <p className="text-gray-500 text-xs">
                  {cert.date} • {cert.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}

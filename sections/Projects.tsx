'use client';

import { Button, Card, Section } from '@/components/common';
import { PROJECTS } from '@/data/constants';
import { motion } from 'framer-motion';

export function Projects() {
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
      transition: { duration: 0.5 },
    },
  };

  return (
    <Section id="projects">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20 md:mb-24"
      >
        <p className="text-blue-400 uppercase tracking-[0.2em] text-xs md:text-sm font-bold mb-4 opacity-80">
          Portfolio
        </p>
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
          Algunos trabajos destacados
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mx-auto" />
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      >
        {PROJECTS.map((project) => (
          <motion.div key={project.id} variants={itemVariants}>
            <Card
              elevated
              interactive
              className="h-full p-8 flex flex-col hover:shadow-2xl hover:shadow-blue-600/20"
            >
              <h3 className="text-xl font-bold text-white mb-3">
                {project.title}
              </h3>

              <p className="text-gray-400 leading-relaxed mb-5 flex-grow text-sm">
                {project.description}
              </p>

              {project.impact && (
                <div className="mb-5 p-3 bg-blue-600/10 border border-blue-500/30 rounded-xl">
                  <p className="text-blue-300 text-xs font-semibold">
                    💡 {project.impact}
                  </p>
                </div>
              )}

              <div className="mb-5">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                  Stack
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-600/20 text-blue-300 border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-4 border-t border-white/10">
                <Button variant="primary" size="sm" fullWidth>
                  Demo
                </Button>
                <Button variant="secondary" size="sm" fullWidth>
                  GitHub
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-16 text-center"
      >
        <p className="text-gray-400 text-lg mb-6">
          ¿Quieres ver más trabajos? Revisa mi GitHub
        </p>
        <Button variant="outline" size="lg">
          Ver todos los proyectos
        </Button>
      </motion.div>
    </Section>
  );
}
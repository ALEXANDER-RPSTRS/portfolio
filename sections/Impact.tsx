'use client';

import { Card, Section } from '@/components/common';
import { IMPACT_METRICS } from '@/data/constants';
import { motion } from 'framer-motion';
import { BarChart3, Building2, MonitorCheck, ShieldCheck } from 'lucide-react';

const metricIcons = [MonitorCheck, Building2, BarChart3, ShieldCheck];

export function Impact() {
  return (
    <Section id="impact" className="py-16 md:py-24 lg:py-28">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto mb-10 max-w-3xl text-center md:mb-14"
      >
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-blue-400/90">
          Impacto profesional
        </p>
        <h2 className="text-3xl font-bold tracking-normal text-white sm:text-4xl md:text-5xl">
          Experiencia aplicada a productos reales
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-400 md:text-lg">
          Combino desarrollo full-stack, criterio de UX/UI y experiencia en sistemas empresariales
          para construir interfaces limpias, escalables y orientadas a usuarios reales.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {IMPACT_METRICS.map((metric, index) => {
          const Icon = metricIcons[index];

          return (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <Card interactive elevated className="h-full p-6">
                <div className="mb-6 flex size-11 items-center justify-center rounded-2xl border border-blue-300/20 bg-blue-400/10 text-blue-200">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <p className="bg-gradient-to-r from-white via-blue-100 to-violet-200 bg-clip-text text-4xl font-bold leading-none text-transparent">
                  {metric.value}
                </p>
                <h3 className="mt-3 text-base font-semibold text-white">
                  {metric.label}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">
                  {metric.description}
                </p>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}

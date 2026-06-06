'use client';

import { Button } from '@/components/common';
import { CV_INFO, PERSONAL_INFO } from '@/data/constants';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function Hero() {
  const router = useRouter();

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  };

  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-5 pb-20 pt-32 text-white md:pb-32 md:pt-40">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex w-full max-w-5xl flex-col items-center justify-center text-center"
      >
        <motion.div variants={itemVariants} className="mb-6 md:mb-8">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-blue-400/80 sm:text-sm">
            Fullstack Developer & UI/UX Designer
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="mb-8 text-5xl font-extrabold leading-[1.05] tracking-normal text-white sm:text-6xl md:mb-10 md:text-7xl lg:text-8xl"
        >
          {PERSONAL_INFO.name}
          <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-slate-100 via-blue-200 to-indigo-300 bg-clip-text text-transparent">
            {PERSONAL_INFO.lastName}
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mx-auto max-w-3xl text-base leading-relaxed text-gray-400 sm:text-lg md:text-xl"
        >
          Desarrollo interfaces premium, portales empresariales y soluciones full-stack con React,
          Next.js, TypeScript y C#/.NET. Experiencia construyendo productos digitales para
          ecosistemas con 80,000+ usuarios.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-12 flex w-full flex-col justify-center gap-4 sm:w-auto sm:flex-row md:mt-14 md:gap-5"
        >
          <Button variant="primary" size="lg" onClick={() => router.push(CV_INFO.onlinePath)}>
            <span className="inline-flex items-center justify-center gap-2">
              <FileText className="size-5" aria-hidden="true" />
              Ver CV online
            </span>
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Ver proyectos
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contacto
          </Button>
        </motion.div>
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.2, duration: 2.5, repeat: Infinity }}
        onClick={() => document.querySelector('#impact')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 sm:bottom-8 flex flex-col items-center gap-2 cursor-pointer border-none bg-transparent hover:text-white transition-colors duration-300 group"
        aria-label="Desplazarse a sección de impacto"
      >
        <span className="text-xs font-medium text-gray-500 group-hover:text-blue-300 transition-colors sm:text-sm">Desplázate</span>
        <svg
          className="h-4 w-4 text-blue-400/80 group-hover:text-blue-300 transition-colors sm:h-5 sm:w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.button>
    </section>
  );
}

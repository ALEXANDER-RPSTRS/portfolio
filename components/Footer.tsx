'use client';

import { NAV_BRAND, NAV_LINKS, SOCIAL_LINKS } from '@/data/constants';
import { resolveNavHref } from '@/lib/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/8 bg-black/20">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-4"
        >
          <div>
            <h3 className="mb-2 text-2xl font-bold text-white">{NAV_BRAND.displayName}</h3>
            <p className="text-sm text-gray-500">{NAV_BRAND.role}</p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Navegación</h4>
            <nav className="space-y-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.id}
                  href={resolveNavHref(link.href)}
                  className="block text-sm text-gray-500 transition hover:text-violet-400"
                  data-cursor-hover
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Redes</h4>
            <div className="space-y-2">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-500 transition hover:text-violet-400"
                data-cursor-hover
              >
                GitHub <span>→</span>
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-500 transition hover:text-violet-400"
                data-cursor-hover
              >
                LinkedIn <span>→</span>
              </a>
              <a
                href={SOCIAL_LINKS.email}
                className="flex items-center gap-2 text-sm text-gray-500 transition hover:text-violet-400"
                data-cursor-hover
              >
                Email <span>→</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">¿Trabajemos juntos?</h4>
            <Link
              href="/#contact"
              className="inline-block rounded-full bg-violet-600/90 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-violet-500"
              data-cursor-hover
            >
              Contactar
            </Link>
          </div>
        </motion.div>

        <div className="mb-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-600 sm:flex-row">
          <p>© {currentYear} Alexander Gutiérrez. Todos los derechos reservados.</p>
          <p>
            Diseñado con <span className="text-violet-400/80">♦</span> · Next.js + React + Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}

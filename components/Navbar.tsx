'use client';

import { NAV_BRAND, NAV_LINKS } from '@/data/constants';
import { handleNavClick } from '@/lib/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { Mail, Menu, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const onNavClick = (href: string) => {
    handleNavClick(href, router);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:px-6 md:pt-6">
      <motion.nav
        initial={false}
        animate={mounted ? { opacity: 1, y: 0 } : false}
        transition={{ duration: 0.5 }}
        aria-label="Navegacion principal"
        className="pointer-events-auto flex min-h-16 w-full max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/60 px-4 py-2 shadow-2xl shadow-black/40 backdrop-blur-2xl sm:px-5 md:min-h-[72px] md:px-6"
      >
        <button
          type="button"
          onClick={() => onNavClick('#')}
          className="group flex items-center gap-3 rounded-full pr-2 text-left transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
          data-cursor-hover
        >
          <span className="relative flex size-10 items-center justify-center rounded-full border border-white/12 bg-white/5 shadow-lg shadow-blue-500/10 md:size-11">
            <span className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/20 via-violet-400/10 to-transparent opacity-80" />
            <span className="relative size-2.5 rounded-full bg-gradient-to-br from-blue-300 to-violet-300 shadow-[0_0_18px_rgba(96,165,250,0.75)]" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="bg-gradient-to-r from-white via-blue-100 to-violet-200 bg-clip-text text-base font-semibold text-transparent md:text-lg">
              {NAV_BRAND.displayName}
            </span>
            <span className="mt-1 hidden text-[11px] font-medium text-white/40 md:block">
              {NAV_BRAND.role}
            </span>
          </span>
        </button>

        <ul className="hidden items-center gap-1 rounded-full border border-white/8 bg-white/[0.03] p-1 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                onClick={() => onNavClick(link.href)}
                className="rounded-full px-4 py-2.5 text-sm font-medium text-white/65 transition-all duration-300 hover:bg-white/8 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-400"
                data-cursor-hover
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => onNavClick('#contact')}
          className="hidden items-center gap-2 rounded-full border border-blue-300/15 bg-blue-400/8 px-4 py-2.5 text-sm font-semibold text-blue-100 shadow-lg shadow-blue-500/5 transition-all duration-300 hover:border-blue-300/30 hover:bg-blue-400/12 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-400 md:flex"
          data-cursor-hover
        >
          <Mail className="size-4" aria-hidden="true" />
          Hablemos
        </button>

        <button
          type="button"
          className="rounded-full border border-white/10 bg-white/5 p-3 text-white/80 transition hover:bg-white/10 md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Cerrar menu' : 'Abrir menu'}
          aria-expanded={isMobileMenuOpen}
          data-cursor-hover
        >
          {isMobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 8 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto absolute left-4 right-4 top-20 mx-auto max-w-sm space-y-1 rounded-3xl border border-white/10 bg-black/85 p-3 shadow-2xl shadow-black/50 backdrop-blur-2xl sm:left-6 sm:right-6"
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => onNavClick(link.href)}
                className="w-full rounded-2xl px-4 py-3 text-left text-sm font-medium text-white/70 transition-all duration-300 hover:bg-white/8 hover:text-white"
                data-cursor-hover
              >
                {link.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => onNavClick('#contact')}
              className="mt-1 w-full rounded-2xl border border-blue-300/20 bg-blue-400/10 px-4 py-3 text-left text-sm font-semibold text-blue-100"
              data-cursor-hover
            >
              Hablemos
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

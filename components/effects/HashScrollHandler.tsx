'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export function HashScrollHandler() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== '/') return;

    const hash = window.location.hash;
    if (!hash) return;

    const timer = window.setTimeout(() => {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
    }, 150);

    return () => window.clearTimeout(timer);
  }, [pathname]);

  return null;
}

'use client';

import { AnimatedBackground } from '@/components/effects/AnimatedBackground';
import { CursorGlow } from '@/components/effects/CursorGlow';
import { HashScrollHandler } from '@/components/effects/HashScrollHandler';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AnimatedBackground />
      <CursorGlow />
      <HashScrollHandler />
      {children}
    </>
  );
}

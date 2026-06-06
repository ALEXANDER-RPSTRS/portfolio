import { Providers } from '@/components/Providers';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Alexander Gutiérrez — Fullstack Developer',
  description:
    'Portfolio premium de Alexander Gutiérrez. Fullstack Developer especializado en React, Next.js, TypeScript y C#/.NET.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="relative min-h-full flex flex-col bg-[#020202] text-white">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

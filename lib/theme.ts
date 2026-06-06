/**
 * Sistema de Diseño Premium
 * Tokens centralizados: colores, tipografía, espacios, efectos
 * 
 * Paleta inspirada en Apple, Vercel, Linear, Framer
 * Oscuro profundo con acentos violeta y azul eléctrico
 */

export const theme = {
  // ===== COLORES (macOS/iOS AESTHETIC) =====
  colors: {
    // Neutrales (Apple Gray Scale)
    neutral: {
      50: '#f9f9f9',
      100: '#f5f5f5',
      200: '#efefef',
      300: '#e5e5e5',
      400: '#d0d0d0',
      500: '#b0b0b0',
      600: '#8e8e93',
      700: '#636366',
      800: '#3a3a3c',
      900: '#1c1c1e',
      950: '#0c0c0c',
    },
    // Fondos (macOS Dark Mode)
    bg: {
      primary: '#0c0c0c',      // Fondo principal (Apple Black)
      secondary: '#1c1c1e',    // Fondo secundario (System Gray)
      elevated: '#2c2c2e',     // Tarjetas, panels (System Gray 5)
      hover: 'rgba(255, 255, 255, 0.06)',
      hoverStrong: 'rgba(255, 255, 255, 0.10)',
    },
    // Accents (Apple System Colors + Premium)
    accent: {
      // Azul Apple Premium
      blue: {
        300: '#85d1ff',
        400: '#00b4ff',
        500: '#0a84ff',
        600: '#0066ff',
        700: '#0052cc',
      },
      // Púrpura Apple Premium
      purple: {
        300: '#d99ef2',
        400: '#bf5af0',
        500: '#af52de',
        600: '#9933ff',
        700: '#7c3aed',
      },
      // Azul Oscuro Premium
      indigo: {
        300: '#b0c4ff',
        400: '#7b61ff',
        500: '#5856d6',
        600: '#4040ff',
        700: '#3232dc',
      },
      // Rosa/Magenta Premium
      pink: {
        300: '#ffa3d2',
        400: '#ff4080',
        500: '#ff2d55',
        600: '#ff1744',
        700: '#d81b60',
      },
    },
    // Texto (Apple Typography)
    text: {
      primary: '#ffffff',
      secondary: '#ebebf5',
      tertiary: '#a1a1a6',
      muted: '#8e8e93',
    },
    // Estados (Apple System Colors)
    status: {
      success: '#34c759',
      warning: '#ff9500',
      error: '#ff3b30',
      info: '#0a84ff',
    },
  },

  // ===== TIPOGRAFÍA =====
  typography: {
    // Familias
    fontFamily: {
      sans: 'var(--font-geist-sans), system-ui, -apple-system, sans-serif',
      mono: 'var(--font-geist-mono), monospace',
    },
    // Sizes (rem)
    fontSize: {
      xs: '0.75rem',      // 12px
      sm: '0.875rem',     // 14px
      base: '1rem',       // 16px
      lg: '1.125rem',     // 18px
      xl: '1.25rem',      // 20px
      '2xl': '1.5rem',    // 24px
      '3xl': '1.875rem',  // 30px
      '4xl': '2.25rem',   // 36px
      '5xl': '3rem',      // 48px
      '6xl': '3.75rem',   // 60px
      '7xl': '4.5rem',    // 72px
    },
    // Line heights
    lineHeight: {
      tight: '1.25',
      normal: '1.5',
      relaxed: '1.75',
      loose: '2',
    },
    // Font weights
    fontWeight: {
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
    },
  },

  // ===== ESPACIADO =====
  spacing: {
    0: '0',
    px: '1px',
    0.5: '0.125rem',   // 2px
    1: '0.25rem',      // 4px
    2: '0.5rem',       // 8px
    3: '0.75rem',      // 12px
    4: '1rem',         // 16px
    5: '1.25rem',      // 20px
    6: '1.5rem',       // 24px
    8: '2rem',         // 32px
    10: '2.5rem',      // 40px
    12: '3rem',        // 48px
    14: '3.5rem',      // 56px
    16: '4rem',        // 64px
    20: '5rem',        // 80px
    24: '6rem',        // 96px
  },

  // ===== BORDER RADIUS =====
  radius: {
    none: '0',
    xs: '0.25rem',     // 4px
    sm: '0.5rem',      // 8px
    md: '0.75rem',     // 12px
    lg: '1rem',        // 16px
    xl: '1.5rem',      // 24px
    '2xl': '2rem',     // 32px
    '3xl': '3rem',     // 48px
    full: '9999px',
  },

  // ===== SOMBRAS (macOS Style) =====
  shadow: {
    // Glow effects (Apple-style)
    glow: {
      sm: '0 0 20px rgba(10, 132, 255, 0.15)',
      md: '0 0 40px rgba(10, 132, 255, 0.25)',
      lg: '0 0 60px rgba(10, 132, 255, 0.35)',
      xl: '0 0 80px rgba(10, 132, 255, 0.45)',
      blue: '0 0 40px rgba(0, 180, 255, 0.2)',
      purple: '0 0 40px rgba(191, 90, 240, 0.2)',
    },
    // Elevaciones (Apple Depth)
    elevation: {
      sm: '0 1px 2px rgba(0, 0, 0, 0.1)',
      md: '0 4px 12px rgba(0, 0, 0, 0.15)',
      lg: '0 12px 28px rgba(0, 0, 0, 0.2)',
      xl: '0 24px 48px rgba(0, 0, 0, 0.25)',
      '2xl': '0 40px 80px rgba(0, 0, 0, 0.3)',
    },
  },

  // ===== TRANSICIONES =====
  transition: {
    duration: {
      fast: '150ms',
      base: '300ms',
      slow: '500ms',
      slower: '700ms',
    },
    timing: {
      linear: 'linear',
      ease: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      easeIn: 'cubic-bezier(0.42, 0, 1, 1)',
      easeOut: 'cubic-bezier(0, 0, 0.58, 1)',
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    },
  },

  // ===== BREAKPOINTS (Tailwind) =====
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  // ===== COMPONENTES COMUNES =====
  components: {
    button: {
      base: 'px-6 py-3 rounded-full font-semibold transition-all duration-300 outline-none',
      primary: 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50',
      secondary: 'bg-white/10 hover:bg-white/15 text-white border border-white/20 hover:border-white/30',
      outline: 'border border-white/20 hover:bg-white/10 text-white hover:border-white/40',
      ghost: 'hover:bg-white/10 text-white hover:text-white',
    },
    card: {
      base: 'bg-white/5 border border-white/10 backdrop-blur-2xl rounded-3xl overflow-hidden',
      elevated: 'bg-white/8 border border-white/15 backdrop-blur-3xl',
    },
    section: {
      base: 'relative py-20 md:py-32 px-6',
    },
    input: {
      base: 'w-full px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 focus:bg-white/8',
    },
  },

  // ===== GRADIENTES PREMIUM (macOS) =====
  gradients: {
    blueToIndigo: 'linear-gradient(135deg, #0a84ff 0%, #5856d6 100%)',
    purpleToBlue: 'linear-gradient(135deg, #bf5af0 0%, #0a84ff 100%)',
    darkToBright: 'linear-gradient(180deg, rgba(12, 12, 12, 0) 0%, rgba(12, 12, 12, 0.8) 100%)',
    appleGlass: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
  },
} as const;

// ===== TIPOS PARA TYPESCRIPT =====
export type ThemeColors = typeof theme.colors;
export type ThemeTypography = typeof theme.typography;
export type ThemeSpacing = typeof theme.spacing;

/**
 * Constantes y datos del portfolio
 * Información personal, experiencia, educación, proyectos, etc.
 * 
 * Mantén este archivo actualizado con tu información
 */

// ===== INFORMACIÓN PERSONAL =====
export const NAV_BRAND = {
  displayName: 'Alexander Gutiérrez',
  role: 'Fullstack Developer',
} as const;

export const PERSONAL_INFO = {
  name: 'Renato Alexander',
  lastName: 'Gutiérrez Carranza',
  title: 'Fullstack Developer & UI/UX Designer',
  location: 'Trujillo, Perú',
  email: 'alexander.carranzagr@gmail.com',
  phone: '+51 946 493 930',
  bio: 'Ingeniero de Sistemas especializado en desarrollo Full-Stack. Pasionado por crear experiencias digitales premium y escalables. Experiencia en portales empresariales para 80,000+ usuarios.',
  shortBio: 'Full-Stack Developer con experiencia en C#/.NET y ecosistema JavaScript moderno.',
} as const;

export const CV_INFO = {
  onlinePath: '/cv',
  pdfPath: '/cv-renato-gutierrez.pdf',
} as const;

export const IMPACT_METRICS = [
  {
    value: '80,000+',
    label: 'usuarios impactados',
    description: 'Experiencia en portales empresariales de alto trafico.',
  },
  {
    value: '34',
    label: 'empresas integradas',
    description: 'Trabajo en ecosistemas corporativos con multiples unidades.',
  },
  {
    value: '5+',
    label: 'sistemas y portales',
    description: 'Desarrollo de soluciones web, gestion interna y UX/UI.',
  },
  {
    value: '24/7',
    label: 'operacion y soporte',
    description: 'Disponibilidad, pruebas, actualizaciones y monitoreo.',
  },
] as const;

// ===== REDES SOCIALES =====
export const SOCIAL_LINKS = {
  github: 'https://github.com/ragc29',
  linkedin: 'https://linkedin.com/in/ragc29',
  email: 'mailto:alexander.carranzagr@gmail.com',
  whatsapp: 'https://wa.me/51946493930',
} as const;

// ===== EXPERIENCIA LABORAL =====
export const EXPERIENCE = [
  {
    id: 'intercorp',
    company: 'Intercorp',
    position: 'Software Developer',
    duration: 'Marzo - Junio 2025',
    durationShort: '3 meses',
    description: 'Rediseño y desarrollo de portal Somos Intercorp para 80,000+ usuarios diarios. Implementación de nuevas secciones (Entrénate, Entérate, Crece, Benefíciate). Pruebas, actualizaciones y disponibilidad 24/7.',
    achievements: [
      'Rediseñó portal de empresa con 34 empresas y 80,000 usuarios diarios',
      'Implementó 4 nuevas secciones principales con diseño responsive',
      'Garantizó disponibilidad 24/7 con sistema de monitoreo',
      'Coordinó pruebas y actualizaciones de performance',
    ],
    technologies: ['React', 'TypeScript', 'C#/.NET', 'SQL Server'],
    type: 'Experiencia Profesional',
  },
  {
    id: 'essalud',
    company: 'ESSALUD',
    position: 'Asistente de Gestión Tecnológica',
    duration: 'Febrero 2025',
    durationShort: '1 mes',
    description: 'Digitalización de inventario patrimonial. Desarrollo de plataforma web de gestión y auditorías técnicas de infraestructura.',
    achievements: [
      'Desarrolló plataforma web de gestión de inventario',
      'Realizó auditorías técnicas de infraestructura',
      'Digitalización completa de procesos patrimoniales',
    ],
    technologies: ['Web Development', 'Database Design', 'Python'],
    type: 'Experiencia Profesional',
  },
  {
    id: 'mendoza-consultores',
    company: 'Mendoza Consultores',
    position: 'Desarrollador Software / Analista',
    duration: 'Julio 2023 - Diciembre 2024',
    durationShort: '1.5 años',
    description: 'Desarrollo de sistema integral de gestión con módulos de almacén, personal y asistencia. Página web corporativa y gestión de bases de datos.',
    achievements: [
      'Desarrolló sistema multi-módulo (almacén, personal, asistencia)',
      'Creó página web corporativa responsive',
      'Gestión y optimización de bases de datos',
      'Implementó arquitectura escalable',
    ],
    technologies: ['C#/.NET', 'JavaScript', 'MySQL', 'MongoDB'],
    type: 'Experiencia Profesional',
  },
  {
    id: 'cobalt-creative',
    company: 'Cobalt Creative',
    position: 'Diseñador UX/UI',
    duration: 'Abril - Noviembre 2021',
    durationShort: '7 meses',
    description: 'Diseño de experiencias de usuario y prototipos interactivos. Investigación UX y validación de conceptos con usuarios.',
    achievements: [
      'Realizó investigación UX exhaustiva con usuarios',
      'Creó prototipos interactivos de alta fidelidad',
      'Validó conceptos de diseño con usuarios reales',
      'Mentoreo de diseñadores juniors',
    ],
    technologies: ['Figma', 'Adobe XD', 'User Research', 'Prototyping'],
    type: 'Experiencia Profesional',
  },
  {
    id: 'corporacion-zavaleta',
    company: 'Corporación Zavaleta',
    position: 'Desarrollador Software / Soporte TI',
    duration: 'Marzo 2022 - Mayo 2023',
    durationShort: '1.2 años',
    description: 'Desarrollo de software multi-interfaz de gestión. Módulos de control, horarios y bases de datos.',
    achievements: [
      'Desarrolló software multi-interfaz de gestión',
      'Implementó módulos de control y horarios',
      'Soporte técnico 24/7 a usuarios',
      'Optimización de performance',
    ],
    technologies: ['C#', 'SQL Server', 'VB.NET', 'Windows Forms'],
    type: 'Experiencia Profesional',
  },
] as const;

// ===== EDUCACIÓN =====
export const EDUCATION = [
  {
    id: 'ing-sistemas',
    institution: 'Universidad Privada del Norte (UPN)',
    degree: 'Ingeniería de Sistemas Computacionales',
    status: 'Por egresar - Marzo 2026',
    gpa: '3.5/4.0',
    highlights: [
      'Metodologías ágiles (Scrum, XP)',
      'Documentación técnica',
      'Arquitectura de software',
      'Gestión de proyectos',
    ],
  },
] as const;

// ===== SKILLS =====
export const SKILLS = {
  frontend: {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS', 'Responsive Design', 'Framer Motion', 'Web Performance'],
  },
  backend: {
    category: 'Backend & Databases',
    skills: ['C#/.NET', 'Python', 'Node.js', 'SQL Server', 'MySQL', 'MongoDB', 'Oracle', 'API Design', 'System Architecture'],
  },
  design: {
    category: 'Design & UX',
    skills: ['Figma', 'Adobe XD', 'UI/UX Design', 'User Research', 'Prototyping', 'Design Systems', 'Web Design'],
  },
  tools: {
    category: 'Herramientas & Metodologías',
    skills: ['Git', 'GitHub', 'VS Code', 'Visual Studio', 'Jira', 'Asana', 'Trello', 'Scrum', 'XP', 'Office 365'],
  },
} as const;

// ===== PROYECTOS (PORTFOLIO) =====
export const PROJECTS = [
  {
    id: 'somos-intercorp',
    title: 'Portal Somos Intercorp',
    description: 'Portal corporativo rediseñado para 80,000+ usuarios diarios. 34 empresas integradas con nuevas secciones (Entrénate, Entérate, Crece, Benefíciate).',
    technologies: ['React', 'TypeScript', 'C#/.NET', 'SQL Server', 'Responsive Design'],
    role: 'Software Developer',
    impact: '80,000+ usuarios diarios | 34 empresas | 99.9% uptime',
    link: '#projects',
  },
  {
    id: 'mendoza-system',
    title: 'Sistema Integral de Gestión',
    description: 'Sistema ERP multi-módulo con gestión de almacén, personal y asistencia. Arquitectura escalable con frontend responsivo y backend robusto.',
    technologies: ['C#/.NET', 'JavaScript', 'MySQL', 'MongoDB', 'Windows Forms'],
    role: 'Full-Stack Developer',
    impact: '100+ usuarios | 5 módulos principales | Uptime 99.5%',
    link: '#projects',
  },
  {
    id: 'bcp-banking',
    title: 'BCP Banking Replica (En desarrollo)',
    description: 'Réplica funcional de la plataforma de banca por internet del Banco de Crédito del Perú con transacciones, consultas de saldo y transferencias.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    role: 'Full-Stack Developer',
    impact: 'Proyecto educativo | Arquitectura moderna | UI Premium',
    link: '#projects',
  },
  {
    id: 'spotify-replica',
    title: 'Spotify Replica (En desarrollo)',
    description: 'Plataforma de streaming de música con autenticación, reproducción, playlists y sistema de recomendaciones basado en preferencias.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'WebSocket', 'Framer Motion'],
    role: 'Full-Stack Developer',
    impact: 'Audio streaming | Real-time | 1000+ canciones',
    link: '#projects',
  },
  {
    id: 'aws-cloud',
    title: 'Cloud Dashboard (En desarrollo)',
    description: 'Dashboard de monitoreo e integración con AWS para gestión de infraestructura en la nube, análisis de costos y métricas de performance.',
    technologies: ['React', 'AWS SDK', 'TypeScript', 'D3.js', 'Python Lambda', 'DynamoDB'],
    role: 'Full-Stack + DevOps',
    impact: 'Cloud infrastructure | Real-time monitoring | CI/CD',
    link: '#projects',
  },
  {
    id: 'design-system',
    title: 'Design System UI (En desarrollo)',
    description: 'Sistema de componentes reutilizables premium estilo macOS/iOS con documentación interactiva y Storybook.',
    technologies: ['React', 'Storybook', 'Tailwind CSS', 'TypeScript', 'Framer Motion'],
    role: 'Component Developer',
    impact: '30+ componentes | Documentación | Accesibilidad A11y',
    link: '#projects',
  },
] as const;

// ===== CERTIFICACIONES Y LOGROS =====
export const CERTIFICATIONS = [
  {
    id: 'toefl',
    name: 'TOEFL ITP',
    issuer: 'ETS',
    date: '2024',
    description: 'Inglés nivel B1',
  },
  {
    id: 'scrum',
    name: 'Metodologías Ágiles',
    issuer: 'UPN',
    date: '2024',
    description: 'Especialización en Scrum y XP',
  },
] as const;

// ===== CONTACT FORM =====
export const CONTACT = {
  title: 'Ponte en contacto',
  description: 'Estoy disponible para nuevas oportunidades y colaboraciones. Siéntete libre de contactarme.',
  successMessage: '¡Mensaje enviado correctamente! Te contactaré pronto.',
  errorMessage: 'Hubo un error al enviar el mensaje. Intenta nuevamente.',
} as const;

// ===== NAVEGACIÓN =====
export const NAV_LINKS = [
  { id: 'home', label: 'Inicio', href: '#' },
  { id: 'about', label: 'Sobre mí', href: '#about' },
  { id: 'experience', label: 'Experiencia', href: '#experience' },
  { id: 'projects', label: 'Proyectos', href: '#projects' },
  { id: 'cv', label: 'CV', href: '/cv' },
  { id: 'contact', label: 'Contacto', href: '#contact' },
] as const;

// ===== META =====
export const SITE_META = {
  title: 'Renato Alexander - Full-Stack Developer & UI/UX Designer',
  description: 'Portfolio profesional de Renato Alexander, Full-Stack Developer especializado en React, Next.js, C#/.NET y diseño UX/UI moderno.',
  url: 'https://alexrg.dev',
  ogImage: '/og-image.png',
} as const;

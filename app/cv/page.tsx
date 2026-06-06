import { Footer } from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Card, Section } from '@/components/common';
import { EDUCATION, EXPERIENCE, PERSONAL_INFO, PROJECTS, SKILLS, SOCIAL_LINKS } from '@/data/constants';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, BriefcaseBusiness, GraduationCap, Mail, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'CV | Renato Alexander Gutierrez Carranza',
  description: 'CV online de Renato Alexander, Full-Stack Developer y UI/UX Designer.',
};

export default function CvPage() {
  const mainProjects = PROJECTS.slice(0, 3);

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden text-white">
      <Navbar />

      <Section className="pb-16 pt-32 md:pb-24 md:pt-40">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/"
            className="mb-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/70 transition hover:bg-white/10 hover:text-white"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Volver al portfolio
          </Link>

          <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-blue-400/90">
                CV online
              </p>
              <h1 className="text-4xl font-extrabold leading-tight tracking-normal text-white sm:text-5xl md:text-6xl">
                {PERSONAL_INFO.name}
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  {PERSONAL_INFO.lastName}
                </span>
              </h1>
              <p className="mt-5 text-xl font-semibold text-white/85">
                {PERSONAL_INFO.title}
              </p>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-gray-400 md:text-lg">
                Full-Stack Developer con experiencia en React, Next.js, TypeScript y C#/.NET.
                He trabajado en portales empresariales para 80,000+ usuarios, combinando frontend
                moderno, backend robusto y criterio UX/UI.
              </p>
            </div>

            <Card elevated className="h-fit p-6">
              <h2 className="text-lg font-semibold text-white">Contacto</h2>
              <div className="mt-5 space-y-4 text-sm text-gray-300">
                <p className="flex items-center gap-3">
                  <MapPin className="size-4 text-blue-300" aria-hidden="true" />
                  {PERSONAL_INFO.location}
                </p>
                <a className="flex items-center gap-3 text-gray-300 hover:text-blue-300" href={SOCIAL_LINKS.email}>
                  <Mail className="size-4 text-blue-300" aria-hidden="true" />
                  {PERSONAL_INFO.email}
                </a>
                <a className="block rounded-2xl border border-blue-300/20 bg-blue-400/10 px-4 py-3 text-center font-semibold text-blue-100 transition hover:bg-blue-400/15" href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <a className="block rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center font-semibold text-white/80 transition hover:bg-white/10" href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      <Section className="py-12 md:py-16">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {[
            ['80,000+', 'usuarios diarios impactados'],
            ['34', 'empresas en portal corporativo'],
            ['5+', 'sistemas, portales y productos'],
          ].map(([value, label]) => (
            <Card key={label} elevated className="p-6">
              <p className="bg-gradient-to-r from-white via-blue-100 to-violet-200 bg-clip-text text-4xl font-bold text-transparent">
                {value}
              </p>
              <p className="mt-3 text-sm font-medium text-gray-400">{label}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="py-12 md:py-16">
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[260px_1fr]">
          <div>
            <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              <BriefcaseBusiness className="size-5" aria-hidden="true" />
              Experiencia
            </p>
          </div>

          <div className="space-y-5">
            {EXPERIENCE.map((experience) => (
              <Card key={experience.id} elevated className="p-6">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-white">{experience.position}</h2>
                    <p className="font-semibold text-blue-300">{experience.company}</p>
                  </div>
                  <p className="text-sm text-gray-500">{experience.duration}</p>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-gray-400">{experience.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {experience.technologies.map((technology) => (
                    <span key={technology} className="rounded-full border border-blue-400/25 bg-blue-400/10 px-3 py-1 text-xs font-medium text-blue-200">
                      {technology}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section className="py-12 md:py-16">
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[260px_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              Proyectos destacados
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {mainProjects.map((project) => (
              <Card key={project.id} elevated interactive className="p-5">
                <h2 className="text-lg font-bold text-white">{project.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">{project.description}</p>
                <p className="mt-4 text-xs font-semibold text-blue-300">{project.impact}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section className="py-12 md:py-20">
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[260px_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              Stack principal
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {Object.values(SKILLS).map((category) => (
              <Card key={category.category} className="p-5">
                <h2 className="text-lg font-bold text-white">{category.category}</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.skills.slice(0, 8).map((skill) => (
                    <span key={skill} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-gray-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section className="py-12 md:py-20">
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[260px_1fr]">
          <div>
            <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              <GraduationCap className="size-5" aria-hidden="true" />
              Educacion
            </p>
          </div>

          <div className="space-y-5">
            {EDUCATION.map((education) => (
              <Card key={education.id} elevated className="p-6">
                <h2 className="text-xl font-bold text-white">{education.degree}</h2>
                <p className="mt-2 font-semibold text-blue-300">{education.institution}</p>
                <p className="mt-2 text-sm text-gray-400">{education.status}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}

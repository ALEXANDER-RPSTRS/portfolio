import { Footer } from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { About } from '@/sections/About';
import { Contact } from '@/sections/Contact';
import { Education } from '@/sections/Education';
import { Experience } from '@/sections/Experience';
import { Hero } from '@/sections/Hero';
import { Impact } from '@/sections/Impact';
import { Projects } from '@/sections/Projects';
import { Skills } from '@/sections/Skills';

export default function Home() {
  return (
    <main className="relative w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <Impact />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}

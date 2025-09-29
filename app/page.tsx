'use client';

import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Experience } from '@/components/Experience';
import { Certifications } from '@/components/Certifications';
import { CodingProfiles } from '@/components/CodingProfiles';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      
      {/* Gradient Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/30 via-transparent to-slate-50/30 dark:from-slate-950/30 dark:via-transparent dark:to-slate-950/30" />
      </div>
      
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <CodingProfiles />
      <ContactForm />
      <Footer />
    </main>
  );
}
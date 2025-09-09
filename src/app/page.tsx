"use client";

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import LazyComponent, {
  LazyAbout,
  LazyExperience,
  LazyProjects,
  LazySkills,
  LazyContact
} from '@/components/LazyComponent';

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <Header />
      <Hero />

      <LazyComponent>
        <LazyAbout />
      </LazyComponent>

      <LazyComponent>
        <LazyExperience />
      </LazyComponent>

      <LazyComponent>
        <LazyProjects />
      </LazyComponent>

      <LazyComponent>
        <LazySkills />
      </LazyComponent>

      <LazyComponent>
        <LazyContact />
      </LazyComponent>

      <Footer />
    </main>
  );
}

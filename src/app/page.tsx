import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Work from '@/components/Work';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <Work />
        <Skills />
        <Experience />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

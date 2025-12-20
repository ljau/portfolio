import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import ProjectsGrid from '@/components/ProjectsGrid';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="projects">
        <ProjectsGrid />
      </section>

      <section id="contact">
        <ContactSection />
      </section>
    </>
  );
}

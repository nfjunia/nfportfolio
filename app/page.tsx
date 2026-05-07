import { Navbar } from "@/components/ui/navbar";
import { Hero } from "@/components/ui/hero";
import { About } from "@/components/ui/about";
import { Skills } from "@/components/ui/skills";
import { Projects } from "@/components/ui/projects";
import { Experience } from "@/components/ui/experience";
import { Contact } from "@/components/ui/contact";
import { Footer } from "@/components/ui/footer";
import WorkedWith from "@/components/ui/companies";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <WorkedWith />
      <Skills />
      <Projects />
      <Experience />
      <Footer />
    </main>
  );
}

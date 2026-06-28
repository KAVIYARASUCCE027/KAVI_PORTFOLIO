import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Education } from "@/sections/Education";
import { Internship } from "@/sections/Internship";
import { Skills } from "@/sections/Skills";
import { Projects } from "@/sections/Projects";
import { Achievements } from "@/sections/Achievements";
import { Certifications } from "@/sections/Certifications";
import { CodingProfile } from "@/sections/CodingProfile";
import { Contact } from "@/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <Internship />
      <Skills />
      <Projects />
      <Achievements />
      <Certifications />
      <CodingProfile />
      <Contact />
    </>
  );
}

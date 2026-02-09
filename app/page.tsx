"use client";

import { useLang } from "./lib/LanguageContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Exercises from "./components/Exercises";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  const { t } = useLang();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee text={t.about.marquee} />
        <About />
        <Marquee text={t.experience.marquee} />
        <Experience />
        <Marquee text={t.projects.marquee} />
        <Projects />
        <Marquee text={t.exercises.marquee} />
        <Exercises />
        <Marquee text={t.skills.marquee} />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

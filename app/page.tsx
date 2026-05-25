"use client";

import { useLang } from "./lib/LanguageContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AgentChat from "./components/AgentChat";
import AgentDocs from "./components/AgentDocs";

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
        <Marquee text={t.skills.marquee} />
        <Skills />
        <Marquee text="AI AGENT" />
        <AgentDocs />
        <Contact />
      </main>
      <Footer />
      <AgentChat />
    </>
  );
}

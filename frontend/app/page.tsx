"use client";
import AboutMe from "@/components/about-me";
import Copyright from "@/components/copyright";
import Hero from "@/components/hero/hero";
import NameIntro from "@/components/intro";
import Projects from "@/components/projects";

import { useState } from "react";

export default function Home() {
  const [intro, setIntro] = useState(true);
  if (intro) return <NameIntro intro={intro} setIntro={setIntro} />;

  return (
    <>
      <main>
        <Hero />
        {/* /* <Projects /> */}
        <AboutMe />
      </main>
      <footer>{/* <Copyright /> */}</footer>
    </>
  );
}

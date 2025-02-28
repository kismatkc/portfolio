"use client";
import AboutMe from "@/components/about-me";
// import Copyright from "@/components/copyright";
import Hero from "@/components/hero/hero";
import NameIntro from "@/components/intro";
import Projects from "@/components/projects";
import { Scrollbars } from "react-custom-scrollbars";
import { useEffect, useState } from "react";
import TrackCursor from "@/components/track-cursor";
import HamburgerMenu from "@/components/navbar";
import ScrollToSection from "@/components/scrollToSectionWrapper";
import ContactMe from "@/components/contact-me";
//@ts-expect-error not sure abput the structure but its not that important
function renderThumbVertical({ style, ...props }) {
  // Merge the default style with your custom styles
  const thubStyle = {
    ...style,
    background: "hsl(var(--brand-green))",

    borderRadius: "60px",
  };

  // Return a div that renders as the thumb
  return <div style={thubStyle} {...props} />;
}

export default function Home() {
  const [intro, setIntro] = useState(true);
  const [cursorPosition, setCursorPosition] = useState(0);
  // const scrollRef = useRef<Scrollbars>(null);
  const [scrollRef, setScrollRef] = useState<Scrollbars | null>(null);

  useEffect(() => {
    if (!scrollRef) return;
  }, [scrollRef]);

  if (intro) return <NameIntro intro={intro} setIntro={setIntro} />;

  return (
    <Scrollbars
      style={{ height: "100vh", width: "100vw" }}
      renderThumbVertical={renderThumbVertical}
      thumbSize={50}
      autoHide
      onScrollFrame={(values) => {
        setCursorPosition(values.top * 100);
      }}
      ref={(el) => {
        if (!el) return;
        setScrollRef(el);
      }}
    >
      <ScrollToSection>
        <HamburgerMenu scrollRef={scrollRef} />
        <TrackCursor cursorPosition={cursorPosition} />
        <Hero />
        <Projects />
        <AboutMe />
        <ContactMe />
      </ScrollToSection>
      {/* <footer><Copyright /></footer> */}
    </Scrollbars>
  );
}

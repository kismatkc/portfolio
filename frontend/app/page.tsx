"use client";
import AboutMe from "@/components/about-me";
import Copyright from "@/components/copyright";
import Hero from "@/components/hero/hero";
import NameIntro from "@/components/intro";
import Projects from "@/components/projects";
import { Scrollbars } from "react-custom-scrollbars";
import { useCallback, useState } from "react";
import TrackCursor from "@/components/track-cursor";
import throttle from "lodash.throttle";
function renderThumbVertical({ style, ...props }) {
  // Merge the default style with your custom styles
  const thubStyle = {
    ...style,
    background: "hsl(var(--brand-green))",
    // background:
    // "linear-gradient(50deg,rgba(45,253,74,1) 36%,rgba(34,193,195,1) 100%",
    borderRadius: "60px",
  };

  // Return a div that renders as the thumb
  return <div style={thubStyle} {...props} />;
}

export default function Home() {
  const [intro, setIntro] = useState(true);
  const [cursorPosition, setCursorPosition] = useState(0);

  const throttleCursorPositionChange = useCallback(
    throttle((scrollValue) => setCursorPosition(scrollValue * 100), 2000),
    []
  );

  if (intro) return <NameIntro intro={intro} setIntro={setIntro} />;

  return (
    <Scrollbars
      style={{ height: "100vh", width: "100vw" }}
      renderThumbVertical={renderThumbVertical}
      thumbSize={50}
      autoHide
      onScrollFrame={(values) => {
        throttleCursorPositionChange(values.top * 100);
        // setCursorPosition(Math.trunc(values.top * 100));
        console.log("is", cursorPosition);

        console.log("should be ", Math.trunc(values.top * 100));
      }}
    >
      <main className="relative">
        <TrackCursor cursorPosition={cursorPosition} />
        <Hero />
        <AboutMe />
      </main>
      <footer>{/* <Copyright /> */}</footer>
    </Scrollbars>
  );
}

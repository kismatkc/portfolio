import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
type SectionContextType = {
  homeEl: HTMLDivElement | null;
  aboutMeEl: HTMLDivElement | null;
  projectsEl: HTMLDivElement | null;
  setHomeEl: (el: HTMLDivElement | null) => void;
  setAboutMeEl: (el: HTMLDivElement | null) => void;
  setProjectEl: (el: HTMLDivElement | null) => void;
  // setProjectEl: (el: HTMLDivElement | null) => void;
};
const sectionContext = createContext({} as SectionContextType);
const ScrollToSection = ({ children }: { children: ReactNode }) => {
  const [homeEl, setHomeEl] = useState<null | HTMLDivElement>(null);
  const [aboutMeEl, setAboutMeEl] = useState<null | HTMLDivElement>(null);
  const [projectsEl, setProjectEl] = useState<null | HTMLDivElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  // const observer = new IntersectionObserver(
  //   (entries) => {
  //     console.log("hi");
  //   },
  //   {
  //     root: rootRef.current,
  //     threshold: 0.3,
  //   }
  // );
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("Element", entry.target);
        }
      });
    },
    {
      threshold: 0.3,
    }
  );

  useEffect(() => {
    if (homeEl && aboutMeEl && projectsEl) {
      const entries = [homeEl, aboutMeEl, projectsEl];
      entries.forEach((section) => observer.observe(section));
    }
  }, [homeEl, aboutMeEl, projectsEl]);

  return (
    <sectionContext.Provider
      value={{
        homeEl,
        aboutMeEl,
        projectsEl,
        setHomeEl,
        setAboutMeEl,
        setProjectEl,
      }}
    >
      <main className="relative" ref={rootRef}>
        {children}
      </main>
    </sectionContext.Provider>
  );
};

export default ScrollToSection;

export const useSections = () => useContext(sectionContext);

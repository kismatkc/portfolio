import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

type userView =
  | { view: "HOME"; el: HTMLDivElement | null }
  | { view: "PROJECTS"; el: HTMLDivElement | null }
  | { view: "ABOUT"; el: HTMLDivElement | null };
type SectionContextType = {
  homeEl: HTMLDivElement | null;
  aboutMeEl: HTMLDivElement | null;
  projectsEl: HTMLDivElement | null;
  userView: userView;
  sections: {
    HOME: HTMLDivElement | null;
    PROJECTS: HTMLDivElement | null;
    ABOUT: HTMLDivElement | null;
  };

  setHomeEl: (el: HTMLDivElement | null) => void;
  setAboutMeEl: (el: HTMLDivElement | null) => void;
  setProjectEl: (el: HTMLDivElement | null) => void;
  setUserView: (view: userView) => void;
};
const sectionContext = createContext({} as SectionContextType);
const ScrollToSection = ({ children }: { children: ReactNode }) => {
  const [homeEl, setHomeEl] = useState<null | HTMLDivElement>(null);
  const [aboutMeEl, setAboutMeEl] = useState<null | HTMLDivElement>(null);
  const [projectsEl, setProjectEl] = useState<null | HTMLDivElement>(null);
  const [userView, setUserView] = useState<userView>({
    view: "HOME",
    el: homeEl,
  });
  const rootRef = useRef<HTMLDivElement>(null);

  const observer = useMemo(
    () =>
      new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              if (entry.target === homeEl)
                return setUserView({ view: "HOME", el: homeEl });
              if (entry.target === aboutMeEl)
                return setUserView({ view: "ABOUT", el: aboutMeEl });
              if (entry.target === projectsEl)
                return setUserView({ view: "PROJECTS", el: projectsEl });
            }
          });
        },
        {
          threshold: 0.3,
        }
      ),
    [aboutMeEl, projectsEl, homeEl]
  );

  useEffect(() => {
    if (!homeEl || !aboutMeEl || !projectsEl) return;
    const entries = [homeEl, aboutMeEl, projectsEl];

    entries.forEach((section) => observer.observe(section));

    return () => {
      entries.forEach((section) => observer.unobserve(section));
    };
  }, [homeEl, aboutMeEl, projectsEl, observer]);

  return (
    <sectionContext.Provider
      value={{
        homeEl,
        aboutMeEl,
        projectsEl,
        userView,
        setUserView,
        setHomeEl,
        setAboutMeEl,
        setProjectEl,
        sections: { HOME: homeEl, PROJECTS: projectsEl, ABOUT: aboutMeEl },
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

import useScrollToSection from "@/hooks/scroll-to-section";
import { useEffect, useRef } from "react";

const Projects = ({}) => {
  const { setProjectPosition } = useScrollToSection();
  const projectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let flag = false;

    if (projectRef.current?.offsetTop && !flag) {
      flag = true;
      console.log(projectRef.current.offsetTop);

      setProjectPosition(projectRef.current.offsetTop);
    }
  }, [projectRef.current?.offsetTop, setProjectPosition]);
  return (
    <section className="h-[800px]" ref={projectRef}>
      Projects
    </section>
  );
};

export default Projects;

//https://github.com/johanguse/shadcn-carousel-testimonials use this compoent for fake clients review

import { useEffect, useRef } from "react";
import { useSections } from "./scrollToSectionWrapper";

const Projects = ({}) => {
  const { setProjectEl } = useSections();

  return (
    <section
      className="h-[800px]"
      ref={(el) => {
        if (el) {
          setProjectEl(el as HTMLDivElement);
        }
      }}
    >
      Projects
    </section>
  );
};

export default Projects;

//https://github.com/johanguse/shadcn-carousel-testimonials use this compoent for fake clients review

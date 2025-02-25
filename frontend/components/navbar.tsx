import { Menu, X } from "lucide-react";

import { useCallback, useEffect, useRef, useState } from "react";
import { animate, AnimatePresence, motion } from "framer-motion";
import { Scrollbars } from "react-custom-scrollbars";

import { useSections } from "./scrollToSectionWrapper";
type MenuItems = "HOME" | "PROJECTS" | "ABOUT";
const menuItems: MenuItems[] = ["HOME", "PROJECTS", "ABOUT"];
const HamBurger = ({ scrollRef }: { scrollRef: Scrollbars | null }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const { userView, sections } = useSections();

  const animateToSection = useCallback(
    (current: number, targetValue: number) => {
      console.log(current, targetValue);

      const animation = animate(current, targetValue, {
        duration: 1000,
        type: "spring",
        damping: 20,
        stiffness: 90,
        onUpdate: (latest) => {
          setIsMenuOpen(false);
          scrollRef?.scrollTop(latest); // Actual scroll update
        },
      });

      return animation;
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  useEffect(() => {
    if (!isMenuOpen || !navRef.current) return;
    const navElement = navRef.current;
    const handleClick = (e: MouseEvent) => {
      const clickedElement = e.target;
      if (!clickedElement) return;
      if (navElement.contains(clickedElement as Node)) return;
      setIsMenuOpen(false);
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [isMenuOpen]);

  return (
    <nav className="flex flex-col  z-10 fixed top-1 right-3">
      <div className="flex justify-end">
        <AnimatePresence>
          <motion.button
            className="hover:shadow-xl p-2 rounded-full block"
            whileTap={{ scale: 0.8 }}
            onClick={(e) => {
              e.stopPropagation();
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </motion.button>
        </AnimatePresence>
      </div>
      <AnimatePresence>
        <motion.div
          ref={navRef}
          initial={{ y: "-125%" }}
          animate={{
            y: isMenuOpen ? "0%" : "-125%",
            opacity: 1,
            transition: { duration: 1, type: "spring" },
          }}
        >
          <ul className="font-extrabold">
            {menuItems.map((item, i) => (
              <li
                key={i}
                className={` py-3 text-right pr-2  hover:text-brand-green hover:cursor-pointer transition-colors text-lg ${
                  item === userView.view && "text-brand-green"
                }`}
                onClick={() => {
                  if (!scrollRef) return;
                  const currentTop = scrollRef?.getScrollTop();

                  animateToSection(
                    currentTop,
                    sections[item]?.offsetTop || window.scrollY
                  );
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>
    </nav>
  );
};

export default HamBurger;
